import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"
import * as FixinsActions from "../../actions/FixinsActions"
import secureLogin from "../utils/AuthModule"

class LogInPage extends React.Component{
  constructor(){
		super();
		this.state = {
			username: '',
      password: '',
      loginFailureStyles: {display: "none"},
      loginSuccessStyles: {display: "none"}
		}
	}

  showLoginFailure(){
    this.setState({loginFailureStyles: {
      display: "block",
      background: '#FF6666',
      height: '120px',
      width: '100%'
    }
  })
}


  showLoginSuccess(){
    this.setState({
      loginFailureStyles: {display: "none"},
      loginSuccessStyles: {
      display: "block",
      background: '#98FB98',
      height: '120px',
      width: '100%'
    }
  })

}

	handleUsernameChange(e){
		this.setState({username: e.target.value})
	}

  	handlePasswordChange(e){
  		this.setState({password: e.target.value})
  	}



	handleSubmit(e){
		e.preventDefault(e);
    let thisUser = {}
    thisUser.username = this.state.username
    thisUser.password = this.state.password
    if(thisUser.username.length < 1 || thisUser.password.length < 1){
      this.showLoginFailure();

    } else{
          this.props.userLogin(thisUser, (loggedInUser) => {
            if(loggedInUser === "LoginError" || loggedInUser === "LoginError2" ){
              this.showLoginFailure();
            }
            else{this.showLoginSuccess()};
          })
    }
		this.setState({username: "", password: ""})
	}


render(){

if(this.props.currentUser._id !== undefined){
  this.context.router.push('index/myDashboard')
}

let putOneSubNeighborhoodInState=this.props.putOneSubNeighborhoodInState

  return(

    <div className="row text-center">
    <h1>login</h1>
    <div className="col-md-offset-1 col-md-3">
    <div style={this.state.loginFailureStyles}><h2>Login failed. Try again and do something different.</h2></div>
    <div style={this.state.loginSuccessStyles}><h2>Login success! Great work with that
    {this.props.currentUser ? this.props.currentUser.username : null}</h2>.</div>

    </div>
  <div className="col-md-3">
  <h4>

  <Link onClick={putOneSubNeighborhoodInState.bind(this, "TRUE_NEW_USER")}
  to="index/allNeighborhoods">
    Need an account? Sign up here.</Link>
    <br/>
    <form className="centered" style={{maxWidth: "500px"}} onSubmit={this.handleSubmit.bind(this)}>
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
      </div><h5>
    <input className="button btn-danger align-right small-mar" type="submit" value="Log-in"/>
    </h5>
    </form>

        </h4>

    </div>

    <div className="col-md-2">
    <img src="./static/chewing.gif" style={{borderRadius: "25px", boxShadow: "0 0 10px grey", margin: "15px"}}/>

    </div>
    </div>
    )
  }
}


LogInPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}


const userLogin = (thisUser, callback, dispatch) => {
  $.ajax({
    url: "http://localhost:4444/api/login",
    type: 'POST',
    data: thisUser,
    success: function(loggedInUser){
      dispatch(
        {
          type: "LOG_IN",
          user: loggedInUser
        })
          callback(loggedInUser)

    }.bind(this),
    error: function(xhr, status, err){
      console.error('./login', status, err.toString());
    }.bind(this)
  })
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    userLogin: (thisUser, callback) => userLogin(thisUser, callback, dispatch),
    putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage)
