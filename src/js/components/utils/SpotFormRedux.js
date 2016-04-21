
import React, {Component, PropTypes} from 'react'
import CustomDropdown from "./CustomDropdown"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {reduxForm} from 'redux-form'
import {createValidator, maxLength, required} from '../../middleware/validation'
import {Link} from 'react-router'
import * as FixinsActions from "../../actions/FixinsActions"
import { connect } from 'react-redux'
import AllGenres from "../details/AllGenres"

const fields = ['name', 'blurb', 'genres', 'address']

export default class SpotFormRedux extends React.Component{
	static propTypes = {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		createSpot: PropTypes.func.isRequired,
		submitting: PropTypes.bool.isRequired,
		resetForm: PropTypes.func.isRequired,
	};

	handleMapClick(e, dispatch){
		const findOne = (query) => {
								$.ajax({
								url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + query.lat +"," + query.lng,
								type: 'GET',
								success: function(myLocation){
									let thisAddress = myLocation.results[0].formatted_address
                  dispatch(
                    {type: "MAP_CLICK",
                    payload:
                    {hasLocation: true,
								      clickPosition: e.latlng,
								      coordinates: e.latlng,
											address: thisAddress
								    }
									})
								}.bind(this),
								error: function(xhr, status, err){
									console.error('uh oh dont blame mapbox', status, err.toString());
								}
							});
						}

				findOne(e.latlng)

	}

	render(){


    let toggleGenresModal = this.props.toggleGenresModal
    let showGenresModal = this.props.showGenresModal
		const {fields: {name, blurb, genres, address}, handleSubmit, resetForm, submitting} = this.props
		const blurbErrorMsg = blurb.touched && blurb.error ? blurb.error : ''
    const nameErrorMsg = name.touched && name.error ? name.error : ''
    const addressErrorMsg = address.touched && address.error ? address.error : ''

    const defaultLatlng = {lat: 45.53, lng: -122.67}
    const zoom = 13
    let genre = this.props.genre
		let subNeighborhood = this.props.subNeighborhood
    let coordinates = this.props.coordinates
    let createSpot = this.props.createSpot

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
		<h3>Post a new spot in {subNeighborhood.subNeighborhood_name}</h3>

      <div className='spotForm'>
        <form onSubmit={handleSubmit( data => {
					console.log(data)
          let newSpotObject = {}
      		newSpotObject.name = data.name
      		newSpotObject.subNeighborhood = subNeighborhood
      		newSpotObject.coordinates = []
      		newSpotObject.coordinates.push(coordinates.lat)
      		newSpotObject.coordinates.push(coordinates.lng)
      		newSpotObject.genres = [genre]
      		newSpotObject.blurb = data.blurb
      		newSpotObject.spot_address = data.address
      		console.log(newSpotObject)
      			createSpot(newSpotObject)
          resetForm()

	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='name'>Blurb</label> <label className='text-danger'>{nameErrorMsg}</label>
            <input type='text' className='form-control' id='name'
              placeholder='Tell us the name of the spot' {...name} required=''/>
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{blurbErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Say a little something about the spot (140 char max)' {...blurb} required=''/>
          </fieldset>
          <button onClick={toggleGenreModal}>Pick a genre</button>
          {this.props.genre ? this.props.genre.genre_name : ""}
          <fieldset className='form-group'>
            <label htmlFor='address'>Blurb</label> <label className='text-danger'>{addressErrorMsg}</label>
            <input type='text' className='form-control' id='address'
              placeholder='Where exactly is this spot?' {...address} required=''/>
          </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>post checkIn
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
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

    <Modal show={this.props.showGenresModal} bsSize="small" aria-labelledby="contained-modal-title-sm">
   	 <Modal.Header>
   		 <Modal.Title id="contained-modal-title-sm">Pick a genre!</Modal.Title>
   	 </Modal.Header>
   	 <Modal.Body>
   		<GenrePick/>
   	 </Modal.Body>
   	 <Modal.Footer>
   		 <Button onClick={toggleGenreModal}>Close</Button>
   	 </Modal.Footer>
    </Modal>




</div>


		)

	}

}



const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    subNeighborhood: state.subNeighborhood,
    name: state.mapStuff.name,
    blurb: state.mapStuff.blurb,
    genres: state.mapStuff.genres,
    coordinates: state.mapStuff.coordinates,
    clickPosition: state.mapStuff.clickPosition,
    hasLocation: state.mapStuff.hasLocation,
    address: state.mapStuff.address,
    genres: state.genre,
    showGenresModal: state.showGenresModal
  }
}

const toggleGenreModal = () => {
	return {type:"TOGGLE_GENRE_MODAL"}
}


const mapDispatchToProps = (dispatch) => {
    return {
      createSpot: (newSpot) => FixinsActions.createSpot(newSpot, dispatch),
      handleMapClick: (e) => handleMapClick(e, dispatch),
      toggleGenresModal: () => dispatch(toggleGenresModal())
  }
}


const SpotFormValidation = createValidator({
  name: required,
  address: required,
  blurb: required,
})


const SpotFormReduxConnected = connect(mapStateToProps, mapDispatchToProps)(SpotFormRedux)

const SpotFormRedux2 = reduxForm({
  form: 'spotForm',
  fields,
  validate: SpotFormValidation
})(SpotFormReduxConnected)

export default SpotFormRedux2
