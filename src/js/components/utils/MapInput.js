
import React from "react"

export default class MapInput extends React.Component{
	constructor(){
		super();
		this.state = {
			coordinates: []
		}
	}



function handleMapClick(e){
	L.popup()
		.setLatLng(e.latlng)
		.setContent("here are the lat and lang: " + e.latlang)
		.openOn(myMap)
	setState({coordinates: e.latlang})

}


	render(){
		var myMap = L.map('map').setView([45.53, -122.67], 13);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    	maxZoom: 18,
    	id: 'dpcairns.pee063cb',
    	accessToken: 'pk.eyJ1IjoiZHBjYWlybnMiLCJhIjoiY2lsd3JtZnp2MDJib3Rpa3Jzazc5OWd2dCJ9.2QcVQqSKUQQuVVC-D472OQ',
    }).addTo(myMap);

	}
	return(
		<div>
		{myMap} <MapElementInMyInagination value={this.props.SetValueTo}>
		</div>

		)

	}

}
