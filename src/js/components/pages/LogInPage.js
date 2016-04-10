import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"

class LogInPage extends React.Component{
  constructor(){
		super();
		this.state = {
			username: '',
      password: ''
		}
	}


	handleUsernameChange(e){
		this.setState({username: e.target.value})
    console.log(this.state)
	}

  	handlePasswordChange(e){
  		this.setState({password: e.target.value})
      console.log(this.state)
  	}



	handleSubmit(e){
		e.preventDefault(e);
    let username1 = this.state.username
    let password1 = this.state.password
      let thisUserFilter = (user) => {
      return (username1 === user.username && password1 === user.password )
            }
       let thisUser = this.props.users.filter(thisUserFilter)
		this.props.userLogin(thisUser)
		this.setState({username: "", password: ""})
	}


render(){



  return(
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="input-group">
        Username:
        <input type="text"
         value={this.state.username}
         onChange={this.handleUsernameChange.bind(this)}
         className="form-control"
           placeholder="username" />
      </div>
      <div className="input-group">
        Password:
        <input type="password"
         value={this.state.password}
         onChange={this.handlePasswordChange.bind(this)}
         className="form-control"
           placeholder="password" />
      </div>
    <input className="button btn-danger align-right" type="submit" value="Log-in"/>
    </form>
    )
  }
}


      const userLogin = (thisUser) => {
        console.log(thisUser)
              return {
                type: "LOG_IN",
                user: thisUser
              }
          }

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    userLogin: (thisUser) => dispatch(userLogin(thisUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)
