import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router'
import Links from "./utils/Links"

export default class Layout extends React.Component{
		constructor(){
			super()
			this.state = {
				loggedIn: {display: "block"},
				loggedOut: {display: "none"}
			}
		}


handleLogin(){
			this.setState(
				{loggedIn: {display: "block"},
				loggedOut: {display: "none"}
			})
		}


	handleLogout(){
		this.setState(
			{loggedIn: {display: "none"},
		 	loggedOut: {display: "block"}
				})
				this.context.router.push('index/login')

			}

componentDidMount(){
	if(this.props.currentUser._id !== undefined){
		this.handleLogin()
	}
	else{
		this.handleLogout()
	}
}

		render(){
			let currentUser = this.props.currentUser
			return(
			<div className="bg-success container">
						<Links/>
						<h2 className="bg-warning text-right"> fixins || get stuft </h2>
						<div>
						hello, {this.props.currentUser.username !== undefined ? this.props.currentUser.username : "honored guest"} || {this.props.currentUser.username !== undefined ? <a onClick={this.props.userLogout.bind(this)} >logout?</a> : <Link to="index/login">login?</Link>}

						</div>

						{this.props.children}
			</div>
			)
		}
}


const userLogout = () => {
  console.log()
        return {
          type: "LOG_OUT",
	       }
    }

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    userLogout: () => dispatch(userLogout())
  }
}


Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
/*
<div onClick={this.handleLogout.bind(this)} style={this.state.loggedIn}>hello {this.props.currentUser.username !== undefined ? this.props.currentUser.username : 'honored guest' }! <a onClick={this.props.userLogout.bind(this)}> logout?</a></div>
<div style={this.state.loggedOut}><Link to="index/login"> login</Link></div>
*/


/*
{
	currentUser.username !== undefined ?
	( {currentUser.username} ! <a onClick={this.props.userLogout.bind(this)}> logout?</a>)
	: (honored guest! <Link to="index/login">login?</Link>)
}*/
