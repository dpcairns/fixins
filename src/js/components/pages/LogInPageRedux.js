import React, {Component, PropTypes} from 'react'
import * as FixinsActions from "../../actions/FixinsActions"
import {createValidator, required} from '../../middleware/validation'
import { Link } from 'react-router'
import {reduxForm} from 'redux-form'
import { connect } from 'react-redux'


const fields = ['username','password']

class LogInPageRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		userLogin: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
    toggleHidden:  PropTypes.func.isRequired
  };

  render () {
        if(this.props.currentUser._id !== undefined){
          this.context.router.push('index/myDashboard')
        }
    let hiddenValue = this.props.hiddenValue
    let toggleHidden = this.props.toggleHidden
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    let loginFailureStyles = {
        display: hiddenValue,
        background: "pink",
        height: "60px",
        width: "100%"
      }

    const {fields: {username, password}, resetForm, handleSubmit, submitting} = this.props
    const usernameErrorMsg = username.touched && username.error ? username.error : ''
    const passwordErrorMsg = password.touched && password.error ? password.error : ''
    return (
      <div>
      <Link onClick={putOneSubNeighborhoodInState.bind(this, "TRUE_NEW_USER")}
      to="index/allNeighborhoods">
        <h2>Need an account? Sign up here.</h2></Link>
        <div style={loginFailureStyles}><h2>Login failed. Try again and do something different.</h2></div>
      <div className='loginForm'>
        <form onSubmit={handleSubmit( data => {
          let thisUser = {}
          thisUser.username = data.username
          thisUser.password = data.password
                this.props.userLogin(thisUser, (loggedInUser) => {
                  console.log(loggedInUser)
                  if(loggedInUser === "LoginError"){
                    console.log("toggle_hidden")
                    toggleHidden()
                } else if (hiddenValue === "block" && loggedInUser !== "LoginError"){
                  toggleHidden()
                }
          })
          resetForm()
	    	})} className='form' role='form'>
        <fieldset className='form-group'>
          <label htmlFor='username'>Username</label> <label className='text-danger'>{usernameErrorMsg}</label>
          <input type='text' className='form-control' id='name'
            placeholder='Ex: SomebodySpecial321' {...username} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='password'>Password</label> <label className='text-danger'>{passwordErrorMsg}</label>
          <input type='password' className='form-control' id='password'
            placeholder='And the password?' {...password} required=''/>
        </fieldset>
        <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Save
          {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
            : <span></span>}
          </button>
        </form>
      </div>
      </div>
    )
  }
}

LogInPageRedux.contextTypes = {
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

const toggleHidden = () => {
  return {
    type: "TOGGLE_HIDDEN"
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users,
    hiddenValue: state.hiddenValue
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    userLogin: (thisUser, callback) => userLogin(thisUser, callback, dispatch),
    toggleHidden: () => dispatch(toggleHidden()),
    putOneSubNeighborhoodInState: (_id) => dispatch(FixinsActions.putOneSubNeighborhoodInState(_id)),
  }
}

const LoginFormValidation = createValidator({
  username: required,
  password: required
})


const LogInPageReduxConnected = connect(mapStateToProps, mapDispatchToProps)(LogInPageRedux)

export default reduxForm({
  form: 'loginForm',
  fields,
  validate: LoginFormValidation
})(LogInPageReduxConnected)
