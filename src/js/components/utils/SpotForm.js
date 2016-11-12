
import React, {Component, PropTypes} from 'react'
import CustomDropdown from "./CustomDropdown"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {reduxForm} from 'redux-form'
import {createValidator, maxLength, required} from '../../middleware/validation'
import {Link} from 'react-router'
import * as FixinsActions from "../../actions/FixinsActions"
import { connect } from 'react-redux'
import AllGenres from "../details/AllGenres"
import { Modal, Button } from 'react-bootstrap'

const fields = ['name', 'blurb', 'genres', 'address']

class SpotForm extends React.Component{

	static propTypes = {
		fields: PropTypes.object.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		createSpot: PropTypes.func.isRequired,
		submitting: PropTypes.bool.isRequired,
		resetForm: PropTypes.func.isRequired,
	};





	render(){

		const	handleGenresChange = (e) => {
				this.props.putOneGenreInState(e.target.value)
				}



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

		    const marker = this.props.hasLocation ?
         <Marker position={this.props.clickPosition}>
          <Popup>
            <span>Add a spot here?</span>
          </Popup>
        </Marker>
        : null;

    const minZoom = 11
    const southWest = L.latLng(45.47672003479257,  -122.72280953111476)
    const northEast = L.latLng(45.63610301220829, -122.44197151841945)
    const metroLimits = L.latLngBounds(southWest, northEast);
    const position = [defaultLatlng.lat, defaultLatlng.lng];
		let thisSubNeighborhood = ""
		if (subNeighborhood.subNeighborhood_name === undefined){
			    function findSubNeighborhoodFilter(mySubNeighborhood){
			    			return (subNeighborhood._id === mySubNeighborhood._id)
			  			}
						thisSubNeighborhood = this.props.allSubNeighborhoods.filter(findSubNeighborhoodFilter)
		}

	return(
		<div>
		<h3>Post a new spot in {thisSubNeighborhood[0].subNeighborhood_name}</h3>

      <div className='spotForm'>
        <form onSubmit={handleSubmit( data => {
					console.log(data)
          let newSpotObject = {}
      		newSpotObject.name = data.name
      		newSpotObject.subNeighborhood = subNeighborhood
      		newSpotObject.coordinates = []
      		newSpotObject.coordinates.push(coordinates.lat)
      		newSpotObject.coordinates.push(coordinates.lng)
      		newSpotObject.genres = [this.props.genre._id]
      		newSpotObject.blurb = data.blurb
      		newSpotObject.spot_address = this.props.spotAddressFormValue
      		console.log(newSpotObject)
					if (newSpotObject.genres && newSpotObject.spot_address){
      			createSpot(newSpotObject)
					}
          resetForm()
					this.props.handleAddressChange({target: {value: "" } } )

	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='name'>Name</label> <label className='text-danger'>{nameErrorMsg}</label>
            <input type='text' className='form-control' id='name'
              placeholder='Tell us the name of the spot' {...name} required=''/>
          </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{blurbErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Say a little something about the spot (140 char max)' {...blurb} required=''/>
          </fieldset>

					<div className="input-group" style={{width:"100%"}}>
						Genres:
						<CustomDropdown setValueTo={this.props.allGenres}
							onchange2={handleGenresChange.bind(this)}
							 data={this.props.allGenres}
							  nameName="genre_name" />
					</div>
          <fieldset className='form-group'>
            <label htmlFor='address'>Address</label> <label className='text-danger'>{addressErrorMsg}</label>
            <input type='text' value={this.props.spotAddressFormValue} onChange={this.props.handleAddressChange.bind(this)} className='form-control' id='address'
              placeholder='Where exactly is this spot? (click on the map for our best guesstimate)'/>
          </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>submit new spot for moderator approval
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
      </div>
	<div className="map-input-box">
		<h2>Show us the spot on the map:</h2>
      <Map onLeafletClick={this.props.handleMapClick.bind(this)} center={position} zoom={zoom} minZoom={minZoom}>
        <TileLayer
          id="dpcairns.pee063cb"
          ref='map'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          accessToken='pk.eyJ1IjoiZHBjYWlybnMiLCJhIjoiY2lsd3JtZnp2MDJib3Rpa3Jzazc5OWd2dCJ9.2QcVQqSKUQQuVVC-D472OQ'
          url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'/>

        {marker}

      </Map>

		</div>

    <Modal show={false} bsSize="small" aria-labelledby="contained-modal-title-sm">
   	 <Modal.Header>
   		 <Modal.Title id="contained-modal-title-sm">Pick a genre!</Modal.Title>
   	 </Modal.Header>
   	 <Modal.Body>
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
		spotAddressFormValue: state.spotAddressFormValue,
    currentUser: state.currentUser,
    subNeighborhood: state.subNeighborhood,
		allSubNeighborhoods: state.subNeighborhoods,
    name: state.mapStuff.name,
    blurb: state.mapStuff.blurb,
		allGenres: state.genres,
    genres: state.mapStuff.genres,
    coordinates: state.mapStuff.coordinates,
    clickPosition: state.mapStuff.clickPosition,
    hasLocation: state.mapStuff.hasLocation,
    address: state.mapStuff.address,
    genre: state.genre,
    showGenresModal: state.showGenresModal
  }
}

const toggleGenreModal = () => {
	return {type:"TOGGLE_GENRE_MODAL"}
}


const	handleMapClick = (e, dispatch) => {
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
									dispatch({
										type: "ADDRESS_ON_FORM",
										address: thisAddress
									})
								}.bind(this),
								error: function(xhr, status, err){
									console.error('uh oh dont blame mapbox', status, err.toString());
								}
							});
						}

				findOne(e.latlng)

	}

const handleAddressChange = (e) => {
		return {type: "ADDRESS_ON_FORM", address: e.target.value}
	}

const mapDispatchToProps = (dispatch) => {
    return {
      createSpot: (newSpot) => FixinsActions.createSpot(newSpot, dispatch),
			putOneGenreInState: (id) => dispatch(FixinsActions.putOneGenreInState(id)),
      handleMapClick: (e) => handleMapClick(e, dispatch),
      toggleGenresModal: () => dispatch(toggleGenresModal()),
			handleAddressChange: (e) => dispatch(handleAddressChange(e))
  }
}

const SpotFormValidation = createValidator({
  name: required,
  blurb: required,
})


const SpotFormReduxConnected = connect(mapStateToProps, mapDispatchToProps)(SpotForm)

const SpotForm2 = reduxForm({
  form: 'spotForm',
  fields,
  validate: SpotFormValidation
})(SpotFormReduxConnected)

export default SpotForm2
