import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"

class GenreDetail extends React.Component{
	render(){

    let allSpots = this.props.allSpots
    let putOneSpotInState = this.props.putOneSpotInState
		let putOneDishInState = this.props.putOneDishInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
		let allDishes = this.props.allDishes
    let genre = this.props.genre
		let spotBoxStyle = {height:"180px",padding:"5px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}

    function findSpotsFilter(spot){
    									return (spot.spot_genres[0]._id === genre._id
												&& spot.approved)
    						}

    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){
							let subNeighborhoodId = spot.spot_subNeighborhood._id
              let spotId = spot._id
										function findDishesFilter(dish){
																return (dish.dish_spot._id === spot._id)
													}
							let theseDishes = allDishes.filter(findDishesFilter)
											return (

                          <div key={spot._id}  style={spotBoxStyle} className="shad bg-danger">
													<div>
                          <Link to={`/spot/${spotId}`}  onClick={putOneSpotInState.bind(this, spotId)}><h3>{spot.spot_name}</h3></Link><br/>
													<h4>located in <Link  onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link>
													<br/>
                          signature dish:
													{
											theseDishes.length>0 ?
													<Link onClick={putOneDishInState.bind(this, theseDishes[0]._id)}
																to={`/dish/${theseDishes[0]._id}`}>
																{" " + theseDishes[0].dish_name} </Link>
											:  <Link onClick={putOneSpotInState.bind(this, spotId)}
											to="index/newDish">be the first to add a dish!</Link>
										}
										</h4>
													</div>
                          </div>
    										)
    				})


    return(
      <div className="bg-warning med-pad med-mar">
			<h3><Link to="index/allGenres">see all genres</Link></h3>
          <h1>{genre.genre_name}</h1>
					<div className="flex flexwrap">
          {allSpots.filter(findSpotsFilter).length> 0 ? spotNodes: (<h1>no relevant restaurants...yet!</h1>)}
					</div>
      </div>
    )

  }
}

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
}

function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

function putOneDishInState(_id){
  return {type: "PUT_ONE_DISH_IN_STATE", _id:_id}
}

const mapStateToProps = (state) => {
  const selectGenre = (genres, id) => {
          const ridiculousArray = genres.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        genre: selectGenre(state.genres, state.genre._id),
        allSpots: state.spots,
				allDishes: state.dishes
        }
}

const mapDispatchToProps = (dispatch) => {
  return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
		putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id)),
		putOneDishInState: (_id) => dispatch(putOneDishInState(_id))
	}
}

const GenreDetailContainer = connect(mapStateToProps, mapDispatchToProps)(GenreDetail)
export default GenreDetailContainer
