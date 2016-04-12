import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"

class AllGenres extends React.Component{
	render(){
    let itemBoxStyle = {height:"125px",width:"200px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
      let putOneGenreInState = this.props.putOneGenreInState
      let allGenres = this.props.allGenres
      let allSpots = this.props.allSpots

      let genreNodes = allGenres.map(function(genre){
        function findSpotsFilter(spot){
                      return (spot.spot_genres[0]._id === genre._id)
                    }
        let theseSpots = allSpots.filter(findSpotsFilter)



        let genreId = genre._id
       return(  <div key={genre._id} style={itemBoxStyle} className="shad bg-danger">
          <Link onClick={putOneGenreInState.bind(this, genreId)} to={`/genre/${genre._id}`}><h3>{genre.genre_name}</h3></Link>
          {theseSpots.length>0 ? ("this many spots: " + theseSpots.length): <Link to="index/newSpot">be the first to add a {genre.genre_name} spot!</Link>}
        </div>
        )
      })
      return(
        <div>
          {genreNodes}
        </div>

      )
  }
}


function putOneGenreInState(_id){
  return {type: "PUT_ONE_GENRE_IN_STATE", _id:_id}
}

const mapStateToProps = (state) => {

	    return {
        allGenres: state.genres,
        allSpots: state.spots
        }
}

const mapDispatchToProps = (dispatch) => {
  return {putOneGenreInState: (_id) => dispatch(putOneGenreInState(_id)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGenres)
