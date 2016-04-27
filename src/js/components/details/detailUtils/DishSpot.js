import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component';


export default class DishSpot extends React.Component{
	render(){
    let allSpots = this.props.allSpots
    let dish = this.props.dish
    let putOneSpotInState= this.props.putOneSpotInState
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let putOneGenreInState = this.props.putOneGenreInState
    let spotStyle={maxHeight:"400px",borderRadius:"10px"}
  function findSpotFilter(spot){
              return (dish.dish_spot._id === spot._id)
        }

    let spotNode = allSpots.filter(findSpotFilter).map(function(spot){
			let subNeighborhoodId = spot.spot_subNeighborhood._id
      let spotId = spot._id
              return (
          <div style={spotStyle} className="bg-info med-pad med-mar" key={spotId}>
								<div className="row">
													<div className="col-md-6">
														<h3>{dish.dish_name} is available at <Link onClick={putOneSpotInState.bind(this, spotId)} to={`/spot/${spotId}`}> {spot.spot_name}
															</Link></h3>
													</div>
													<div className="col-md-6">
														<h3>	({dish.dish_calories} calories for ${dish.dish_price} = {parseInt(dish.dish_calories / dish.dish_price)} calorieDollars) </h3>
													</div>
								</div>
								<div className="row">

										<h4>
										<div className="col-md-4">
										located in <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link>
										</div>
										<div className="col-md-4">
										Genre: <Link onClick={putOneGenreInState.bind(this, spot.spot_genres[0]._id)} to={`/genre/${spot.spot_genres[0]._id}`}>{spot.spot_genres[0].genre_name}</Link>
										</div>
										<div className="col-md-4">
									  blurb: {spot.spot_blurb}
											</div>
											</h4>
									</div>
          </div>

                )
    })
    return(
      <div>
      {spotNode}
      </div>

    )
}
}
