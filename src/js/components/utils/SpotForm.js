
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
			spotSuccessStyles: {display: "none"}
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
							width: '100%'
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
							width: '100%'
						}
					})

					}

	handleNameChange(e){
	this.setState({name: e.target.value})

	}


	handleBlurbChange(e){
		this.setState({blurb: e.target.value})

	}

	handleGenresChange(e){
		this.setState({genres: e.target.value})
	}


	handleMapClick(e){
		this.setState({
		      hasLocation: true,
		      clickPosition: e.latlng,
		      coordinates: e.latlng
		    })
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
		if(newSpotObject.blurb.length<1 || newSpotObject.coordinates.length<1 || newSpotObject.name.length<1 ){
			this.showSpotFailure();
		}
		else{
			this.props.createSpot(newSpotObject)
			this.showSpotSuccess();
		}
		this.setState({username: "", blurb: "", genres: "", coordinates: "", clickPosition: ""})
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
	<div style={this.state.spotSuccessStyles}><h2>Spot added! Click here to <Link to={`subNeighborhood/${subNeighborhoodId}`}> go to the page for the {this.props.mySubNeighborhood.subNeighborhood_name} subNeighborhood</Link>.</h2>.</div>

</div>


		)

	}

}
