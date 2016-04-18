import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

const fields = ['words', 'stars']

class ReviewFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		createReview: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {fields: {words, stars}, handleSubmit, submitting} = this.props
    const nameErrorMsg = name.touched && name.error ? name.error : ''

    return (
      <div className='reviewForm'>
        <form onSubmit={handleSubmit( data => {
          let newReviewObject = {}
          newReviewObject.reviewed_dish = this.props.thisDish
          newReviewObject.words = data.words
          newReviewObject.stars = data.stars
          newReviewObject.review_user = this.props.currentUser
            this.props.createReview(newReviewObject)



	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='words'>Your review:</label> <label className='text-danger'>{nameErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Tell us what you think about the dish . . .' {...words} required=''/>
          </fieldset>
          <fieldset className='form-group'>

          <label htmlFor='stars'>Stars</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='number' min='1' max='5' className='form-control' id='stars'
            placeholder='How many stars out of five?' {...stars} required=''/>
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
  form: 'reviewForm',
  fields,
})(ReviewFormRedux)
