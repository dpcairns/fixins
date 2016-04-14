import React from "react"
import { Link } from "react-router"
export default class Links extends React.Component{
		render(){
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
					<li className="anim-button shad" style={listStyle}> <Link to="index/allNeighborhoods"> browse by neighborhood </Link> </li>
					<li className="anim-button shad" style={listStyle}> <Link to="index/allGenres"> browse by genre </Link> </li>

					</h4>
					</ul>
        </div>
			)
		}
}
