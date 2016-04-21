import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import * as FixinsActions from "../../actions/FixinsActions"
import Links from "../utils/Links"

class AllGenres extends React.Component{
	render(){
    let itemBoxStyle = {height:"125px", padding:"8px", width:"200px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
      let putOneGenreInState = this.props.putOneGenreInState
			let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
      let allGenres = this.props.allGenres
      let allSpots = this.props.allSpots
			let pickOne = this.props.pickOne
			let toggleGenreModal = this.props.toggleGenreModal
      let genreNodes = allGenres.map(function(genre){
        function findSpotsFilter(spot){
                      return (spot.spot_genres[0]._id === genre._id)
                    }
        let theseSpots = allSpots.filter(findSpotsFilter)



        let genreId = genre._id
       return(  <div key={genre._id} style={itemBoxStyle} className="shad bg-danger">

							<a onClick={putOneGenreInState.bind(this, genreId)}>

							<h3 onClick={toggleGenreModal}>{genre.genre_name}</h3>
}
				}
			  </div>
        )
      })
      return(
				<div>
					<h2>Explore a genre</h2><br/>
					<div className="flex flexwrap">
	          {genreNodes}
					</div>
        </div>

      )
  }
}

const mapStateToProps = (state) => {

	    return {
        allGenres: state.genres,
        allSpots: state.spots
        }
}

const toggleGenreModal = () => {
	return {type:"TOGGLE_GENRE_MODAL"}
}


const mapDispatchToProps = (dispatch) => {
  return {putOneGenreInState: (_id) => dispatch(FixinsActions.putOneGenreInState(_id)),
		putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
		toggleGenreModal: () => dispatch(toggleGenreModal())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGenres)
