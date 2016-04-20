import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {createValidator, maxLength, required} from '../../middleware/validation'
import {Link} from 'react-router'

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
    submitting: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  render () {

    let hiddenValue = this.props.hiddenValue
    let toggleHidden = this.props.toggleHidden

        let successStyles = {
            display: hiddenValue,
            background: "lightgreen",
            height: "60px",
            width: "100%",
            textAlign: "center"
          }
    const {fields: {blurb}, handleSubmit, resetForm, submitting} = this.props
    const blurbErrorMsg = blurb.touched && blurb.error ? blurb.error : ''

    return (
      <div className='checkInForm'>
        <form onSubmit={handleSubmit( data => {
					console.log(data)
					var newCheckInObject = {}
	    		newCheckInObject.blurb = data.blurb
	    		newCheckInObject.dish = this.props.thisDish
	    		newCheckInObject.user = this.props.currentUser
	    		this.props.createCheckIn(newCheckInObject)
          resetForm()
          toggleHidden()

	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{blurbErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Say a little something about the experience (140 char max)' {...blurb} required=''/>
          </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Save
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
                <div style={successStyles}><h2>CheckIn added! <Link onClick={toggleHidden} to="index/myDashboard"> Go back go to your dashboard?</Link></h2> </div>
      </div>

    )
  }
}


const CheckInFormValidation = createValidator({
  blurb: required,
  blurb: maxLength(140)
})

export default reduxForm({
  form: 'checkInForm',
  fields,
  validate: CheckInFormValidation
})(CheckInFormRedux)
