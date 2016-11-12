import React from "react"
import { Link } from "react-router"
import StarRatingComponent from 'react-star-rating-component';

export default class TopFiveSubNeighborhoods extends React.Component{
  constructor(){
    super();
    this.state = {randB: 0, randC: 0}
  }
  componentDidMount(){
    let _randB = Math.floor(Math.random()*7)
    let _randC = Math.floor(Math.random()*7)
    this.setState({randB: _randB, randC: _randC})
  }
render(){
        let jackpotStyles = {display: this.props.jackpot, textDecoration: "none", position: "fixed", zIndex:"5", bottom: "40%", fontSize: "12em"}
        let myGlitterFood = ""
        let myOtherGlitterFood = ""
        let jackpotGo = this.props.jackpotGo
        let noDice = this.props.noDice
  			myGlitterFood = "./static/glitterFood" + this.state.randB + ".gif"
  			myOtherGlitterFood = "./static/glitterFood" + this.state.randC + ".gif"
  			if(this.state.randB === this.state.randC){
  				jackpotGo()
  			}
  			else{
  				noDice()
  			}


return(
  <div>
							<div className="col-md-6">
									<Link to="index/admin"><img src={myGlitterFood} height="43%" width="100%" style={{}}/></Link>
									<div style={jackpotStyles}><a target="_blank" href="http://pizzaparty.party" className="jackpot">JACKPOT</a></div>
									</div>
			 				<div className="col-md-6">
			 					<img src={myOtherGlitterFood} height="43%" width="100%" style={{}}/>
			 				</div>
</div>
            )
          }
}
