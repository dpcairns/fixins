import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as FixinsActions from "../../actions/FixinsActions"
import FixinsStore from "../../stores/FixinsStore"

export default class SimpleMap extends React.Component {
  constructor() {
    super();
    this.state = {
      latlng: {lat: 45.53,
      lng: -122.67},
      zoom: 13,
    };
  }

  render() {
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
    const position = [this.state.latlng.lat, this.state.latlng.lng];
    return (
      <Map onLeafletClick={this.props.handleMapClick.bind(this)} onChange={this.props.onchange2.bind(this)} center={position} zoom={this.state.zoom} minZoom={minZoom}>
        <TileLayer
          id="dpcairns.pee063cb"
          ref='map'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          accessToken='pk.eyJ1IjoiZHBjYWlybnMiLCJhIjoiY2lsd3JtZnp2MDJib3Rpa3Jzazc5OWd2dCJ9.2QcVQqSKUQQuVVC-D472OQ'
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'/>
       
        {marker}

      </Map>
    );
  }
}




