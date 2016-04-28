import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as FixinsActions from "../../actions/FixinsActions"
import { connect } from 'react-redux'
import { Link } from 'react-router'

class MapItself extends React.Component {
  constructor(){
    super()
    this.state = {searchName: ""}
  }

      handleNameSearch(e){
      		this.setState({searchName: e.target.value.toLowerCase().substr(0,20)})
      	}

    render(){
    const minZoom = 11
    const center = [45.50, -122.63]
    const zoom = 12
    const southWest = L.latLng(45.47672003479257,  -122.72280953111476)
    const northEast = L.latLng(45.63610301220829, -122.44197151841945)
    const metroLimits = L.latLngBounds(southWest, northEast);
    let putOneSpotInState = this.props.putOneSpotInState
    let allDishes = this.props.allDishes
    let allSpots = this.props.allSpots
    let putOneDishInState = this.props.putOneDishInState
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState

    function findSpotsFilter(spot){
        				return (spot.approved)
    				}
  	let approvedSpots = allSpots.filter(findSpotsFilter)

    	let filteredSpots = approvedSpots
    	filteredSpots = approvedSpots.filter(
    		(spot) => {
    			return	spot.spot_name.toLowerCase().indexOf(this.state.searchName) !== -1;
    			}
    		)


    let markerNodes = filteredSpots.map((spot) => {
      	function findDishesFilter(dish){
          									return (dish.dish_spot._id === spot._id)
          						}
          let signatureDish = allDishes.filter(findDishesFilter)
          let spot_coordinates = [parseFloat(spot.spot_coordinates[0]), parseFloat(spot.spot_coordinates[1])]
          let spotId = spot._id
          let router = this.context.router
            return (
                      <Marker position={spot_coordinates} key={spotId}>
                          <Popup>
                          <div>
                          <h3 onClick={putOneSpotInState.bind(this, spotId)}>
                            <a onClick={ () => router.push(`/spot/${spotId}`)}>{spot.spot_name}</a>
                          </h3>
                          <h5>
                            {spot.spot_address ?
                            spot.spot_address
                            : ""}
                            </h5>
                          <h4>
                            <span onClick={signatureDish.length>0 ?
                              putOneDishInState.bind(this, signatureDish[0]._id)
                              : putOneSpotInState.bind(this, spotId) }>

                          Signature dish: <br/>
                          <a onClick={ signatureDish.length>0 ?
                            () => router.push(`/dish/${signatureDish[0]._id}`)
                            : () => router.push('/index/newDish') }>

                          {signatureDish.length>0 ?
                            signatureDish[0].dish_name
                            : "no dishes yet. be the first to add one!"}<br/>

                          </a>
                        ({signatureDish.length>0 ?
                            signatureDish[0].dish_calories:
                            "n/a "} calories for $

                            {signatureDish.length>0 ?
                               signatureDish[0].dish_price + " "
                               : " n/a "}
                                =
                               {signatureDish.length>0 ?
                                " " + parseInt(signatureDish[0].dish_calories / signatureDish[0].dish_price) + " "
                                 : " n/a "}
                                  calorieDollars)
                              </span>
                              </h4>
                              </div>
                          </Popup>

                      </Marker>
                  )
              })

      return (
        <div>
        <h3>(did we miss a spot? <Link onClick={putOneSubNeighborhoodInState.bind(this, "TRUE_NEW_SPOT")}
        to="index/allNeighborhoods"> add it here!</Link>)
        <span style={{float: "right"}}>
        search spots by name: <input type="text" value={this.state.searchName} onChange={this.handleNameSearch.bind(this)}/>
        </span></h3>
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


function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

const mapStateToProps = (state) => {
 return {allSpots: state.spots, allDishes: state.dishes}
}

const mapDispatchToProps = (dispatch) => {
 return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
        putOneDishInState: (_id) => dispatch(putOneDishInState(_id)),
        putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id)),
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapItself)
