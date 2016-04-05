
import React from "react"
import CustomDropdown from "./CustomDropdown"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


export default class SpotForm extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			blurb: '',
			genres: '',
			coordinates: '',
			clickPosition: '',
			subNeighborhood: '',
			hasLocation: false,
	        defaultLatlng: {lat: 45.53,
            lng: -122.67},
            zoom: 13,
    };
		}


	handleNameChange(e){
	this.setState({name: e.target.value})

	}

	handleSubNeighborhoodChange(e){
		this.setState({subNeighborhood: e.target.value})

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
		newSpotObject.subNeighborhood = this.state.subNeighborhood
		newSpotObject.coordinates = []
		newSpotObject.coordinates.push(this.state.coordinates.lat)
		newSpotObject.coordinates.push(this.state.coordinates.lng)
		newSpotObject.genres = this.state.genres
		newSpotObject.blurb = this.state.blurb
		console.log(this.state)
		this.props.createSpot(newSpotObject)
		this.setState({username: "", blurb: "", genres: "", coordinates: "", neighborhood: '', subNeighborhood: ''})
	}

	render(){

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
				 data={this.props.allGenres}
				  nameName="genre_name" />
		</div>

		<div className="input-group">
			subNeighborhood:
			<CustomDropdown
				setValueTo={this.state.subNeighborhood}
				onchange2={this.handleSubNeighborhoodChange.bind(this)}
				data={this.props.allSubNeighborhoods}
				nameName="subNeighborhood_name" />
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
</div>


		)

	}

}
