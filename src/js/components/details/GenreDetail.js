import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"

class GenreDetail extends React.Component{
	render(){

    let allSpots = this.props.allSpots
    let putOneSpotInState = this.props.putOneSpotInState
		let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let genre = this.props.genre
		let spotBoxStyle = {height:"100px",width:"200px",margin:"5px",float:"left",textAlign:"center"}

    function findSpotsFilter(spot){
    									return (spot.spot_genres[0]._id === genre._id)
    						}

    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){
							let subNeighborhoodId = spot.spot_subNeighborhood._id
              let spotId = spot._id
    									return (

                          <div key={spot._id}  style={spotBoxStyle} className="bg-danger">
													<div>
                          <Link to={`/spot/${spotId}`}  onClick={putOneSpotInState.bind(this, spotId)}>{spot.spot_name}</Link><br/>
													<Link  onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>{spot.spot_subNeighborhood.subNeighborhood_name}</Link>
													<br/>
                          {spot.spot_dishes.length>0 ? spot.spot_dishes[0].dish_name: "none yet"}
													</div>
                          </div>
    										)
    				})


    return(
      <div className="bg-warning">
          <h1>{genre.genre_name}</h1>
					<div className="flex">
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

const mapStateToProps = (state) => {
  const selectGenre = (genres, id) => {
          const ridiculousArray = genres.filter(x => x._id === id)
          return ridiculousArray[0]
        }
	    return {
        genre: selectGenre(state.genres, state.genre._id),
        allSpots: state.spots
        }
}

const mapDispatchToProps = (dispatch) => {
  return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id)),
		putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))}
}

const GenreDetailContainer = connect(mapStateToProps, mapDispatchToProps)(GenreDetail)
export default GenreDetailContainer
