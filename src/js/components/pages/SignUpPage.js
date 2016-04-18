import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import UserFormRedux from "../utils/UserFormRedux"
import * as FixinsActions from "../../actions/FixinsActions"

class SignUpPage extends React.Component{

render(){

  return(
    <div>
    <Link to="index/login">Already have an account? Login here.</Link>
    <UserFormRedux
    allSubNeighborhoods={this.props.allSubNeighborhoods}
    subNeighborhood={this.props.subNeighborhood}
    createUser={this.props.createUser}
     />
    </div>

    )
  }
}


SignUpPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    allSubNeighborhoods: state.subNeighborhoods,
    subNeighborhood: state.subNeighborhood,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createUser: (newUser) => FixinsActions.createUser(newUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
