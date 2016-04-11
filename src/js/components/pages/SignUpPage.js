import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import UserForm from "../utils/UserForm"
import * as FixinsActions from "../../actions/FixinsActions"

class SignUpPage extends React.Component{
  constructor(){
		super();
		this.state = {
			username: '',
      password: '',
		}
	}

render(){

  return(
    <div>
    <Link to="index/login">Already have an account? Login here.</Link>
    <UserForm
    allSubNeighborhoods={this.props.allSubNeighborhoods}
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
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createUser: (newUser) => FixinsActions.createUser(newUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
