import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"
import NeighborhoodList from "../utils/NeighborhoodList"


class AllNeighborhoods extends React.Component{
	render(){
    let itemBoxStyle = {height:"100px",width:"200px", padding:"8px", margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
      let putOneNeighborhoodInState = this.props.putOneNeighborhoodInState
      let allNeighborhoods = this.props.allNeighborhoods
			let stateSubNeighorhood = this.props.subNeighorhood
      let neighborhoodNodes = allNeighborhoods.map(function(neighborhood){
        let neighborhoodId = neighborhood._id
       return(  <div key={neighborhood._id} style={itemBoxStyle} className="shad bg-danger">
          <Link onClick={putOneNeighborhoodInState.bind(this, neighborhoodId)}
					to={`/neighborhood/${neighborhood._id}`}><h1>{neighborhood.neighborhood_name}</h1></Link>
        </div>
        )
      })

			let header = ""
			if (stateSubNeighorhood !== undefined &&  stateSubNeighorhood._id === "TRUE_NEW_SPOT")
									{
										header = "Where do you want to add a spot?"
									}
		else if (stateSubNeighorhood !== undefined && stateSubNeighorhood._id === "TRUE_NEW_USER")
				{
			 header = "Where do you call home?"
			 		}
		else {
			   header = "Explore a neighborhood"

				}



      return(
        <div>
					<h2>{header}</h2>
			    {neighborhoodNodes}
        </div>
			)
 }

}


function putOneNeighborhoodInState(_id){
  return {type: "PUT_ONE_NEIGHBORHOOD_IN_STATE", _id:_id}
}

const mapStateToProps = (state) => {

	    return {
        allNeighborhoods: state.neighborhoods,
				subNeighorhood: state.subNeighborhood
        }
}

const mapDispatchToProps = (dispatch) => {
  return {putOneNeighborhoodInState: (_id) => dispatch(putOneNeighborhoodInState(_id)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNeighborhoods)
