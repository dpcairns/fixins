
import React from "react"
import CustomDropdown from "./CustomDropdown"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {Link} from 'react-router'

export default class SpotForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			blurb: '',
			genres: '',
			coordinates: '',
			clickPosition: '',
			hasLocation: false,
	    defaultLatlng: {lat: 45.53,
      lng: -122.67},
      zoom: 13,
			spotFailureStyles: {display: "none"},
			spotSuccessStyles: {display: "none"},
			address: ''
					}
			}

					showSpotFailure(){
						this.setState({
							spotSuccessStyles: {
								display: "none"
							},
							spotFailureStyles: {
							display: "block",
							background: '#FF6666',
							height: '50px',
							width: '100%',
	            textAlign: "center"
						}
					})
					}


					showSpotSuccess(){
						this.setState({
							spotFailureStyles: {display: "none"},
							spotSuccessStyles: {
							display: "block",
							background: '#98FB98',
							height: '50px',
							width: '100%',
	            textAlign: "center"
						}
					})

					}

	handleNameChange(e){
	this.setState({name: e.target.value})

	}


	handleBlurbChange(e){
		this.setState({blurb: e.target.value})

	}


		handleAddressChange(e){
			this.setState({address: e.target.value})

		}

	handleGenresChange(e){
		this.setState({genres: e.target.value})
	}


	handleMapClick(e){
		const findOne = (query) => {
								$.ajax({
								url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + query.lat +"," + query.lng,
								type: 'GET',
								success: function(myLocation){
									console.log('my location inside ajax call')
									console.log(myLocation.results[0].formatted_address)

								this.setState({
								      hasLocation: true,
								      clickPosition: e.latlng,
								      coordinates: e.latlng,
											address: myLocation.results[0].formatted_address
								    })
								}.bind(this),
								error: function(xhr, status, err){
									console.error('uh oh dont blame mapbox', status, err.toString());
								}
							});
						}

				findOne(e.latlng)

	}

	handleSubmit(e){
		e.preventDefault();
		let newSpotObject = {}
		newSpotObject.name = this.state.name
		newSpotObject.subNeighborhood = this.props.mySubNeighborhood._id
		newSpotObject.coordinates = []
		newSpotObject.coordinates.push(this.state.coordinates.lat)
		newSpotObject.coordinates.push(this.state.coordinates.lng)
		newSpotObject.genres = this.state.genres
		newSpotObject.blurb = this.state.blurb
		newSpotObject.spot_address = this.state.address
		console.log(newSpotObject)
		if(newSpotObject.blurb.length<1 || newSpotObject.spot_address.length<1 || newSpotObject.coordinates.length<1 || newSpotObject.name.length<1 ){
			this.showSpotFailure();
		}
		else{
			this.props.createSpot(newSpotObject)
			this.showSpotSuccess();
		}
		this.setState({username: "", blurb: "", genres: "", coordinates: "", address: ""})
	}

	render(){



		let allGenres = this.props.allGenres
		let subNeighborhoodId = this.props.mySubNeighborhood._id
		    const marker = this.state.hasLocation ?
         <Marker position={this.state.clickPosition}>
          <Popup>
            <span>Add a spot here?</span>
          </Popup>
        </Marker>
        : null;

    const minZoom = 11
    const southWest = L.latLng(45.47672003479257,  -122.72280953111476)
    const northEast = L.latLng(45.63610301220829, -122.44197151841945)
    const metroLimits = L.latLngBounds(southWest, northEast);
    const position = [this.state.defaultLatlng.lat, this.state.defaultLatlng.lng];

	return(
		<div>
		<h3>Post a new spot in {this.props.mySubNeighborhood.subNeighborhood_name}</h3>
		<div className="input-group">
			Spot name:
		  <input type="text" value={this.state.name}
			  onChange={this.handleNameChange.bind(this)}
			  className="form-control"
			  placeholder="spot name" />
		</div>
		<div className="input-group">
			Spot address:
		  <input type="text" value={this.state.address}
			  onChange={this.handleAddressChange.bind(this)}
			  className="form-control"
			  placeholder="Ex: 132 Fake Street Portland OR 23456" />
		</div>

		<div className="input-group">
			Blurb:
		  <input type="text" value={this.state.blurb}
			  onChange={this.handleBlurbChange.bind(this)}
			  className="form-control" placeholder="spot blurb" />
		</div>
		<div className="input-group">
			Genres:
			<CustomDropdown setValueTo={this.state.genres}
				onchange2={this.handleGenresChange.bind(this)}
				 data={allGenres}
				  nameName="genre_name" />
		</div>
		<div className="btn btn-danger" onClick={this.handleSubmit.bind(this)}>Post</div>
		<div style={this.state.spotFailureStyles}><h2>Spot failed. Try again and do something different.</h2></div>
		<div style={this.state.spotSuccessStyles}><h2>Spot added! Check out the detail page for the <Link to={`subNeighborhood/${subNeighborhoodId}`}> {this.props.mySubNeighborhood.subNeighborhood_name}</Link>.</h2>.</div>

	<div className="map-input-box">
		<h2>Show us the spot on the map:</h2>
      <Map onLeafletClick={this.handleMapClick.bind(this)} center={position} zoom={this.state.zoom} minZoom={minZoom}>
        <TileLayer
          id="dpcairns.pee063cb"
          ref='map'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          accessToken='pk.eyJ1IjoiZHBjYWlybnMiLCJhIjoiY2lsd3JtZnp2MDJib3Rpa3Jzazc5OWd2dCJ9.2QcVQqSKUQQuVVC-D472OQ'
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'/>

        {marker}

      </Map>

		</div>
	<div className="btn btn-danger" onClick={this.handleSubmit.bind(this)}>Post</div>
	<div style={this.state.spotFailureStyles}><h2>Spot failed. Try again and do something different.</h2></div>
	<div style={this.state.spotSuccessStyles}><h2>Spot pending review! Check out the detail page for <Link to={`subNeighborhood/${subNeighborhoodId}`}> {this.props.mySubNeighborhood.subNeighborhood_name}</Link>.</h2>.</div>

</div>


		)

	}

}
