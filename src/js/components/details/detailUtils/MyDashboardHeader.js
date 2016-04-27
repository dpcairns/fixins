import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../../utils/Links"
import * as FixinsActions from "../../../actions/FixinsActions"
import { Modal, Button } from "react-bootstrap"
import NewCheckInPage from '../../pages/NewCheckInPage'

export default class MyDashboardHeader extends React.Component{
render(){
  let thisUser = this.props.thisUser
  let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
return(
    <div className="row">
      <div className="col-md-6 text-right">

      <h2>Your dashboard, {thisUser.username}!</h2>
      </div>
      <div className="col-md-6 text-center">
          <h3>You are proud to call {
            thisUser.user_sub_neighborhood !== undefined ?
                <Link to={`/subNeighborhood/${thisUser.user_sub_neighborhood._id}`}
                onClick={putOneSubNeighborhoodInState.bind(this, thisUser.user_sub_neighborhood._id)}>
                {thisUser.user_sub_neighborhood.subNeighborhood_name} </Link>
            : <img height="50" width="100" src="./static/loading.gif" />} home.</h3>
      </div>
    </div>
    )
  }
}
