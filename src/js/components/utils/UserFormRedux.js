import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {createValidator, required} from '../../middleware/validation'
import {Link} from 'react-router'

const fields = ['username', 'password', 'target']

class UserFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
		createUser: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    let hiddenValue = this.props.hiddenValue
    let toggleHidden = this.props.toggleHidden

    const {fields: {username, password, target}, resetForm, handleSubmit, submitting} = this.props
    const usernameErrorMsg = username.touched && username.error ? username.error : ''
    const passwordErrorMsg = password.touched && password.error ? password.error : ''
    const targetErrorMsg = password.touched && password.error ? password.error : ''
      let successStyles = {
          display: hiddenValue,
          background: '#98FB98',
          height: '120px',
          width: '100%',
          textAlign: "center"
        }
      let allSubNeighborhoods = this.props.allSubNeighborhoods
      let subNeighborhoodFilter = (subNeighborhood) => {return (subNeighborhood._id === this.props.subNeighborhood._id)}
      let mySubNeighborhood = allSubNeighborhoods.filter(subNeighborhoodFilter)

    return (
      <div className='userForm'>
      <h3> You call {mySubNeighborhood[0].subNeighborhood_name} home.</h3>

        <form onSubmit={handleSubmit( data => {
          console.log(data)
          var newUser = {}
      		newUser.name = data.username
      		newUser.password = data.password
          newUser.target = data.target
      		newUser.user_sub_neighborhood = this.props.subNeighborhood
      		this.props.createUser(newUser)
          resetForm()
          if(hiddenValue === "none"){
          toggleHidden()}


	    	})} className='form' role='form'>
        <fieldset className='form-group'>
          <label htmlFor='username'>Username</label> <label className='text-danger'>{usernameErrorMsg}</label>
          <input type='text' className='form-control' id='name'
            placeholder='Pick a username you might like. Ex: SomebodySpecial321' {...username} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='password'>Password</label> <label className='text-danger'>{passwordErrorMsg}</label>
          <input type='password' className='form-control' id='password'
            placeholder='And what password would you like?' {...password} required=''/>
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='target'>How many calorieDollars would your target meal have?</label> <label className='text-danger'>{targetErrorMsg}</label>
          <input type='number' className='form-control' id='target'
            placeholder='Maybe like 300 calorieDollars is a good amount' {...target} required=''/>
        </fieldset>
        <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Save
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
        <div style={successStyles}><h2>Signup success! Click here to <Link onClick={toggleHidden} to="index/login">login</Link>.</h2>.</div>
      </div>

    )
  }
}


const UserFormValidation = createValidator({
  username: required,
  password: required,
  target: required
})

export default reduxForm({
  form: 'userForm',
  fields,
  validate: UserFormValidation
})(UserFormRedux)
