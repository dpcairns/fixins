import React from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

class Links extends React.Component{
		render(){
			let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
			let listStyle = {	float: "left",
				padding: "8px",
				margin: "5px",
				background: "pink",
				boxShadow: "1px 1px 2px grey",
			border: "none !important"}
			return(
				<div>
					<ul style={{listStyleType:"none"}}> <h4>
          <li className="anim-button shad" style={listStyle}> <Link to="/">home</Link> </li>
					<li className="anim-button shad" style={listStyle}> <Link to="index/mapPage"> browse the map </Link> </li>
					<li onClick={putOneSubNeighborhoodInState.bind(this, "")} className="anim-button shad" style={listStyle}> <Link to="index/allNeighborhoods"> browse by neighborhood </Link> </li>
					<li className="anim-button shad" style={listStyle}> <Link to="index/allGenres"> browse by genre </Link> </li>

					</h4>
					</ul>
        </div>
			)
		}
}


function putOneSubNeighborhoodInState(_id){
  return {type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE", _id:_id}
}

const mapDispatchToProps = (dispatch) =>{
	return {putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))}
}

export default connect(undefined, mapDispatchToProps)(Links)
