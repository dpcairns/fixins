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
		this.context.router.push('index/login')
		this.setState(
			{loggedIn: {display: "none"},
		 	loggedOut: {display: "block"}
				})

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
			let containerStyle={borderRadius:"15px 15px 15px 15px", marginBottom:"25px", marginTop:"2%", opacity:"0.99"}
			let greetingStyle={marginTop:"15px", marginRight: "10px", boxShadow: "1px 1px 2px grey", background:"lightyellow", maxWidth:"200px", float:"right"}
			let currentUser = this.props.currentUser
			return(
			<div style={containerStyle} className="bg-success container shadow-container">
						<div className="row">
								<div className="col-md-9">
								<Links/>
								</div>
								<div style={greetingStyle} className="col-md-2 text-right anim-button"><h5>
								hello, {this.props.currentUser.username !== undefined ?
									<Link to="index/myDashboard">{this.props.currentUser.username + " "}</Link>
								: "honored guest "}
								|
								{this.props.currentUser.username !== undefined ?
									 <a onClick={this.props.userLogout.bind(this)}><span onClick={this.handleLogout.bind(this)}> logout? </span></a> :
									 <Link to="index/login"> login? </Link>}
													</h5>
								</div>
						</div>

						<h2 className="bg-warning" style={{borderRadius:"50px 0 0 50px"}}>
						<div className="row">
								<div className="col-md-6">
									<span className="text-left">
									<img src="./static/glitter3.gif" height="40px" className="anim-sparkle" />
									</span>
								</div>
								<div className="col-md-offset-3 col-md-3">

									 <span className="text-right">fixins || get stuft </span>
								</div>
						 </div>
						 </h2>

						{this.props.children}
			</div>
			)
		}
}


const userLogout = () => {
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
