import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Links from "../utils/Links"

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
      height: '50px',
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
      height: '50px',
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
    let username1 = this.state.username
    let password1 = this.state.password
      let thisUserFilter = (user) => {
      return (username1 === user.username && password1 === user.password )
            }
       let thisUser = this.props.users.filter(thisUserFilter)
		this.props.userLogin(thisUser)
    if(thisUser.length === 0){
      this.showLoginFailure();
    } else {this.showLoginSuccess();}
		this.setState({username: "", password: ""})
	}


render(){

if(this.props.currentUser._id !== undefined){
  this.context.router.push('index/myDashboard')
}

  return(

    <div className="row text-center">
    <h1>login</h1>
  <div className="col-md-offset-3 col-md-3">
  <h4>

    <Link to="index/signup">Need an account? Sign up here.</Link>
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
    <div style={this.state.loginFailureStyles}><h2>Login failed. Try again and do something different.</h2></div>
    <div style={this.state.loginSuccessStyles}><h2>Login success! Great work with that {this.props.currentUser ? this.props.currentUser.username : null}</h2>.</div>

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

      const userLogin = (thisUser) => {
              return {
                type: "LOG_IN",
                user: thisUser[0]
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
