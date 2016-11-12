import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router'
import Links from "./utils/Links"

class Layout extends React.Component{


	handleLogout(){
		this.props.userLogout()
		this.context.router.push('index/login')
			}

componentDidMount(){
	if(this.props.currentUser._id === undefined){
		this.context.router.push('index/login')
	}
}

		render(){
			let jackpot = this.props.jackpot
			let jackpotStyle = {display: jackpot, backgroundImage: "url(./static/jackpot3.gif)"}
			let containerStyle={borderRadius:"15px 15px 15px 15px", opacity:"0.99"}
			let greetingStyle={marginTop:"15px", marginRight: "10px", boxShadow: "1px 1px 2px grey", background:"lightyellow", maxWidth:"200px", float:"right"}
			let currentUser = this.props.currentUser
			return(
				<div style={jackpot === "block" ? jackpotStyle : {display: "block"}}>
					<div style={containerStyle} className="bg-success container shadow-container">
								<div className="row med-mar">
										<div className="col-md-9">
										<Links/>
										</div>
										<div style={greetingStyle} className="col-md-2 text-right anim-button"><h5>
										hello, {this.props.currentUser.username !== undefined ?
											<Link to="index/myDashboard">{this.props.currentUser.username + " "}</Link>
										: "honored guest "}
										|
										{this.props.currentUser.username !== undefined ?
											 <a onClick={this.props.userLogout.bind(this, currentUser)}><span onClick={this.handleLogout.bind(this)}> logout? </span></a> :
											 <Link to="index/login"> login? </Link>}
															</h5>
										</div>
								</div>

								<h2 className="bg-warning" style={{borderRadius:"50px 0 0 50px"}}>
								<div className="row">
										<div className="col-md-6">
											<span className="text-left hidden-sm hidden-xs">
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
						</div>
			)
		}
}



const userLogout = (dispatch) => {
	console.log("logout started...")
		  $.ajax({
		    url: "http://162.243.119.190:4444/api/logout",
		    type: 'GET',
		    error: function(xhr, status, err){
		      console.error('./logout', status, err.toString());
		    }.bind(this)
		  })
			dispatch(
				{
					type: "LOG_OUT",
				})

		}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
		jackpot: state.jackpot
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    userLogout: () => userLogout(dispatch)
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
