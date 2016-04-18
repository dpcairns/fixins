import React, {Component, PropTypes} from 'react'
import * as FixinsActions from "../../actions/FixinsActions"
import { Link } from 'react-router'
import {reduxForm} from 'redux-form'
import { connect } from 'react-redux'


const fields = ['username','password']

class LogInPageRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		userLogin: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    let putOneSubNeighborhoodInState = this.props.putOneSubNeighborhoodInState
    const {fields: {username, password}, handleSubmit, submitting} = this.props
    const nameErrorMsg = name.touched && name.error ? name.error : ''

    return (
      <div>
      <Link onClick={putOneSubNeighborhoodInState.bind(this, "TRUE_NEW_USER")}
      to="index/allNeighborhoods">
        Need an account? Sign up here.</Link>
      <div className='loginForm'>
        <form onSubmit={handleSubmit( data => {
          let thisUser = {}
          thisUser.username = data.username
          thisUser.password = data.password
                this.props.userLogin(thisUser, (loggedInUser) => {
                  if(loggedInUser === "LoginError" || loggedInUser === "LoginError2" ){
                    console.log('wrong stuff');
                  }
                })
          } )

	    	} className='form' role='form'>
        <fieldset className='form-group'>
          <label htmlFor='username'>Username</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='text' className='form-control' id='name'
            placeholder='Ex: SomebodySpecial321' {...username} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='password'>Password</label> <label className='text-danger'>{nameErrorMsg}</label>
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

const LogInPageRedux2 = connect(mapStateToProps, mapDispatchToProps)(LogInPageRedux)

export default reduxForm({
  form: 'loginForm',
  fields,
})(LogInPageRedux2)
