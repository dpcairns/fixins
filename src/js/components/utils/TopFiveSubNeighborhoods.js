import React from "react"
import { Link } from "react-router"
import StarRatingComponent from 'react-star-rating-component';

export default class TopFiveSubNeighborhoods extends React.Component{
render(){
  let topFiveSubNeighborhoodNodes = []
  let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
  let allSubNeighborhoods = this.props.subNeighborhoods
  let allUsers = this.props.users
  let allSpots = this.props.spots
  let topFiveStyle = {overflow: "hidden", height:"220px", paddingTop: "1px", paddingLeft: "4px", paddingRight: "4px", textAlign: "center", marginBottom: "20px", borderRadius: "15px", background:"#ffd281"}

  if(this.props.subNeighborhoods.length>89){
    let itemBoxStyle = {overflow: "hidden", margin:"2px",maxHeight:"150px",maxWidth:"150px",padding:"5px",float:"left",textAlign:"center", background:"#BDA0CB", borderRadius:"10px"}
    let sortedSubNeighborhoods = []

    allSubNeighborhoods.forEach(function(subNeighborhood){

      function userFilter(user){return (subNeighborhood._id === user.user_sub_neighborhood._id )}
      let thisManyUsers = allUsers.filter(userFilter).length

      function spotFilter(spot){return (spot.spot_subNeighborhood._id === subNeighborhood._id)}
      let thisManySpots = allSpots.filter(spotFilter).length

      sortedSubNeighborhoods.push({
      numberOfUsers: thisManyUsers,
      numberOfSpots: thisManySpots,
      totalItems: (thisManyUsers + thisManySpots),
      _id: subNeighborhood._id,
      subNeighborhood_name: subNeighborhood.subNeighborhood_name,
      })
    })
    sortedSubNeighborhoods.sort(function(subNeighborhoodA, subNeighborhoodB){return subNeighborhoodB.totalItems - subNeighborhoodA.totalItems})
    let topFiveSubNeighborhoods = [sortedSubNeighborhoods[0],sortedSubNeighborhoods[1],sortedSubNeighborhoods[2],sortedSubNeighborhoods[3], sortedSubNeighborhoods[4]]
    topFiveSubNeighborhoodNodes = topFiveSubNeighborhoods.map(function(subNeighborhood){
      return (

        <div style={itemBoxStyle} className="shad2" key={subNeighborhood._id}>
        <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhood._id)} to={`/subNeighborhood/${subNeighborhood._id}`}>
        <h3> {subNeighborhood.subNeighborhood_name + " "}</h3>
        </Link>
        <h4>  <i>{subNeighborhood.numberOfUsers} users <br/>and {subNeighborhood.numberOfSpots} spots!</i></h4>
          </div>
        )
    })
  }
return(
  <div style={topFiveStyle} className="shadow-container">
  <h4 className="colorChange">{this.props.currentUser._id !== undefined ? "Welcome back " + this.props.currentUser.username + "!": ""}</h4>
        <div className="top-five flex flexCenter">
              {this.props.subNeighborhoods.length>88 ? topFiveSubNeighborhoodNodes :  <img  height="50" width="100" src="./static/loading.gif" />}
        </div>
        <h3>top five subNeighborhoods in pdx</h3>

  </div>
)

}
}
