import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import { Link } from 'react-router'
import Links from "../utils/Links"
import NeighborhoodList from "../utils/NeighborhoodList"


class AllNeighborhoods extends React.Component{
	render(){
    let itemBoxStyle = {height:"100px",width:"200px",margin:"5px",float:"left",textAlign:"center", borderRadius:"10px"}
      let putOneNeighborhoodInState = this.props.putOneNeighborhoodInState
      let allNeighborhoods = this.props.allNeighborhoods
      let neighborhoodNodes = allNeighborhoods.map(function(neighborhood){
        let neighborhoodId = neighborhood._id
       return(  <div key={neighborhood._id} style={itemBoxStyle} className="shad bg-danger">
          <Link onClick={putOneNeighborhoodInState.bind(this, neighborhoodId)} to={`/neighborhood/${neighborhood._id}`}><h1>{neighborhood.neighborhood_name}</h1></Link>
        </div>
        )
      })
      return(
        <div>
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
        allNeighborhoods: state.neighborhoods
        }
}

const mapDispatchToProps = (dispatch) => {
  return {putOneNeighborhoodInState: (_id) => dispatch(putOneNeighborhoodInState(_id)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNeighborhoods)
