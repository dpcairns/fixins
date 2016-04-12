import React from "react"
import { Link } from "react-router"
export default class Links extends React.Component{
		render(){
			return(
				<div className="inline">
          <Link to="/"><h4>Home Page</h4></Link>
					<Link to="index/mapPage"><h4>Big Map Page</h4></Link>

        </div>
			)
		}
}
