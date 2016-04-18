import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

const fields = ['blurb']

class CheckInFormRedux extends Component {
  // The fields discussed above are passed in to the fields prop here
  // handleSubmit is another special handler supplied by redux-form
  // handleSubmit will call whatever has been passed in to the "onSubmit" function or a function that you specify
  // handleSubmit has code built in that will check validations before submitting and prevent submission if failure
  // handleSubmit also will automatically pass in a "submitting" = true to this component
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		createCheckIn: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {fields: {blurb}, handleSubmit, submitting} = this.props
    const nameErrorMsg = name.touched && name.error ? name.error : ''

    return (
      <div className='checkInForm'>
        <form onSubmit={handleSubmit( data => {
					console.log(data)
					var newCheckInObject = {}
	    		newCheckInObject.blurb = data.blurb
	    		newCheckInObject.dish = this.props.thisDish
	    		newCheckInObject.user = this.props.currentUser
	    		this.props.createCheckIn(newCheckInObject)
	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{nameErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Enter blurb of the checkIn' {...blurb} required=''/>
          </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Save
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
      </div>

    )
  }
}
export default reduxForm({
  form: 'checkInForm',
  fields,
})(CheckInFormRedux)
