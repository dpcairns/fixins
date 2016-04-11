import React from "react"
import { connect } from 'react-redux'
import RemoveButton from "../utils/RemoveButton"
import Links from "../utils/Links"
import { Link } from 'react-router'

class NeighborhoodDetail extends React.Component{

	render(){

    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let allSubNeighborhoods = this.props.allSubNeighborhoods
    let neighborhood = this.props.neighborhood

    function findSubNeighborhoodsFilter(subNeighorhood){
                return (subNeighorhood.sub_neighborhood_neighborhood._id === neighborhood._id)
          }
      let subNeighorhoodNodes = allSubNeighborhoods.filter(findSubNeighborhoodsFilter).map(function(subNeighborhood){
        let subNeighborhoodId = subNeighborhood._id
                return (
                    <ul key={subNeighborhoodId}>
                    <li>
                      <Link onClick={putOneSubNeighborhoodInState.bind(this, subNeighborhoodId)} to={`/subNeighborhood/${subNeighborhoodId}`}>
                          <b>{subNeighborhood.subNeighborhood_name}</b>
                      </Link>
                    </li>
                    </ul>
                  )
      })
return(
  <div className="bg-warning">
    <h1>Neighborhood Detail Page for {neighborhood.neighborhood_name}</h1>
    <h2>here you go it is every subneighborhood in {neighborhood.neighborhood_name}</h2>
    {subNeighorhoodNodes}
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
