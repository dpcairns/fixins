import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as FixinsActions from "../../actions/FixinsActions"
import { connect } from 'react-redux'
import { Link } from 'react-router'
class MapItself extends React.Component {
    render(){
    const minZoom = 11
    const center = [45.53, -122.67]
    const zoom = 13
    const southWest = L.latLng(45.47672003479257,  -122.72280953111476)
    const northEast = L.latLng(45.63610301220829, -122.44197151841945)
    const metroLimits = L.latLngBounds(southWest, northEast);
    let putOneSpotInState = this.props.putOneSpotInState
    let markerNodes = this.props.allSpots.map((spot) => {
      let spot_coordinates = [parseFloat(spot.spot_coordinates[0]), parseFloat(spot.spot_coordinates[1])]
      let spotId = spot._id
      let router = this.context.router
        return (
                  <Marker position={spot_coordinates} key={spotId}>
                      <Popup>
                      <span onClick={putOneSpotInState.bind(this, spotId)}> Here is the spot: <a onClick={ () => router.push(`/spot/${spotId}`)}>{spot.spot_name}</a><br/>
                            Here is a dish: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_name : "none yet"}<br/>
                            It has this many calories: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_calories: "none yet"}<br/>
                            It costs this many dollars: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_price : "none yet"}<br/>
                            Here is the blurb: {spot.spot_dishes.length > 0 ? spot.spot_dishes[0].dish_blurb : "none yet"}
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

MapItself.contextTypes = {router: React.PropTypes.object.isRequired}

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

const mapStateToProps = (state) => {
 return {allSpots: state.spots}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapItself)
