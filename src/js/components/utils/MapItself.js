import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as FixinsActions from "../../actions/FixinsActions"
import FixinsStore from "../../stores/FixinsStore"

export default class MapItself extends React.Component {
    render(){
    const minZoom = 11
    const center = [45.53, -122.67]
    const zoom = 13
    const southWest = L.latLng(45.47672003479257,  -122.72280953111476)
    const northEast = L.latLng(45.63610301220829, -122.44197151841945)
    const metroLimits = L.latLngBounds(southWest, northEast);
          console.log(this.props.allSpots[0])
          console.log(center)
    let markerNodes = this.props.allSpots.map(function(spot){
      let spot_coordinates = [parseFloat(spot.spot_coordinates[0]), parseFloat(spot.spot_coordinates[1])]

        return (
                  <Marker position={spot_coordinates} key={spot._id}>
                    <Popup>
                      <span>Here is the spot: {spot.spot_name} <br/>
                            Here is a dish: {spot.spot_dishes[0].dish_name}<br/>
                            It has this many calories: {spot.spot_dishes[0].dish_calories}<br/>
                            It costs this many dollars: {spot.spot_dishes[0].dish_price}<br/>
                            Here is the blurb: {spot.spot_dishes[0].dish_blurb}



                      </span>
                    </Popup>
                  </Marker>
              )
          })

      return (
        <div>
        <Map center={center} zoom={zoom} minZoom={minZoom}>
          <TileLayer
            id="dpcairns.pee063cb"
            ref='map'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            accessToken='pk.eyJ1IjoiZHBjYWlybnMiLCJhIjoiY2lsd3JtZnp2MDJib3Rpa3Jzazc5OWd2dCJ9.2QcVQqSKUQQuVVC-D472OQ'
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'/>

          {markerNodes}

        </Map>
        </div>
    );
    }
  }
