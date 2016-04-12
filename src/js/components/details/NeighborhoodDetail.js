import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"
import { Link } from 'react-router'

class NeighborhoodDetail extends React.Component{

	render(){

		let subNeighborhoodBoxStyle = {height:"100px",width:"200px",margin:"5px",float:"left",fontSize:"2em",textAlign:"center"}
		let containerStyle = {display:"inline-block"}
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let allSubNeighborhoods = this.props.allSubNeighborhoods
    let neighborhood = this.props.neighborhood

    function findSubNeighborhoodsFilter(subNeighorhood){
                return (subNeighorhood.sub_neighborhood_neighborhood._id === neighborhood._id)
          }
      let subNeighorhoodNodes = allSubNeighborhoods.filter(findSubNeighborhoodsFilter).map(function(subNeighborhood){
        let subNeighborhoodId = subNeighborhood._id
                return (
                    <div key={subNeighborhoodId}>
                      <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>
													<div style={subNeighborhoodBoxStyle} className="bg-danger">
													<b>{subNeighborhood.subNeighborhood_name}</b>
													</div>
                      </Link>
										</div>
                  )
      })
return(
  <div className="bg-warning">
    <h1>Neighborhood Detail Page for {neighborhood.neighborhood_name}</h1>
    <h2>Here is every subNeighborhood in {neighborhood.neighborhood_name}</h2>
		<div className="flex">
		{subNeighorhoodNodes}
		</div>
  </div>
)


  }
}

function putOneSubNeighborhoodInState(_id){
  return {
    type: "PUT_ONE_SUBNEIGHBORHOOD_IN_STATE",
     _id: _id
  }
}

const mapStateToProps = (state) => {
  const selectNeighborhood = (neighborhoods, id) => {
          const ridiculousArray = neighborhoods.filter(x => x._id === id)
          return ridiculousArray[0]
        }
  return {
    allSubNeighborhoods: state.subNeighborhoods,
    neighborhood: selectNeighborhood(state.neighborhoods, state.neighborhood._id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    putOneSubNeighborhoodInState: (_id) => dispatch(putOneSubNeighborhoodInState(_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodDetail)
