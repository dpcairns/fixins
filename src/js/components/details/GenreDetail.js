import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"

class GenreDetail extends React.Component{
	render(){
    let allSpots = this.props.allSpots
    let putOneSpotInState = this.props.putOneSpotInState
    let genre = this.props.genre

    function findSpotsFilter(spot){
    									return (spot.spot_genres[0]._id === genre._id)
    						}

    				let spotNodes = allSpots.filter(findSpotsFilter).map(function(spot){
              let spotId = spot._id
    									return (

                          <tr key={spot._id}>
                          <td><Link to={`/spot/${spotId}`}  onClick={putOneSpotInState.bind(this, spotId)}>{spot.spot_name}</Link></td>
                          <td>{spot.spot_subNeighborhood.subNeighborhood_name}</td>
                          <td>{spot.spot_dishes.length>0 ? spot.spot_dishes[0].dish_name: "none yet"}</td>
                          </tr>
    										)
    				})


    return(
      <div>
        <Links />
          <h1>{genre.genre_name}</h1>
          <table className="table">
          <th>
          <td>Spot name</td>
          <td>SubNeighborhood</td>
          <td>Signature dish</td>
          </th>
          <tbody>
          {allSpots.filter(findSpotsFilter).length> 0 ? spotNodes: (<h1>no relevant restaurants...yet!</h1>)}
          </tbody>
          </table>
      </div>
    )

  }
}

function putOneSpotInState(_id){
  return {type: "PUT_ONE_SPOT_IN_STATE", _id:_id}
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
  return {putOneSpotInState: (_id) => dispatch(putOneSpotInState(_id))}
}

const GenreDetailContainer = connect(mapStateToProps, mapDispatchToProps)(GenreDetail)
export default GenreDetailContainer
