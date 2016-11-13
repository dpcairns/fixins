import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


export default class SpotDetailHeader extends React.Component{

	render(){
    let spot = this.props.spot
    let putOneGenreInState = this.props.putOneGenreInState
    let toggleDishModal = this.props.toggleDishModal
    return(
    <div className="row">
            <div className="col-md-6">
                <h1>{spot.spot_name}</h1>
                <h3><Link onClick={putOneGenreInState.bind(this, spot.spot_genres[0]._id)} to={`/genre/${spot.spot_genres[0]._id}`}>{spot.spot_genres[0].genre_name}</Link></h3>

            </div>

            <div className="col-md-6 text-center">
                <h2>
                <a style={{cursor: 'pointer'}} onClick={toggleDishModal}>Add a new dish!</a>
                </h2>
            </div>

    </div>
  )
  }
}
