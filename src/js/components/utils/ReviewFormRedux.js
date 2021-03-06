import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'
import {createValidator, required} from '../../middleware/validation'

const fields = ['words', 'stars']

class ReviewFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		createReview: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired
  };

  render () {


    let hiddenValue = this.props.hiddenValue
    let toggleHidden = this.props.toggleHidden
    let toggleReviewModal = this.props.toggleReviewModal
    let successStyles = {
    display: hiddenValue,
    background: "lightgreen",
    height: "60px",
    width: "100%",
    textAlign: "center"
    }

    const {fields: {words, stars}, resetForm, handleSubmit, submitting} = this.props
    const wordsErrorMsg = words.touched && words.error ? words.error : ''
    const starsErrorMsg = stars.touched && stars.error ? stars.error : ''

    return (
      <div className='reviewForm'>
        <form onSubmit={handleSubmit( data => {
          let newReviewObject = {}
          newReviewObject.reviewed_dish = this.props.thisDish
          newReviewObject.words = data.words
          newReviewObject.stars = data.stars
          newReviewObject.review_user = this.props.currentUser
            this.props.createReview(newReviewObject)
            toggleReviewModal()
            resetForm()

	    	})} className='form' role='form'>
          <fieldset className='form-group'>
            <label htmlFor='words'>Your review:</label> <label className='text-danger'>{wordsErrorMsg}</label>
            <textarea rows="10" className='form-control' id='words'
              placeholder='Tell us what you think about the dish . . .' {...words} required=''/>
          </fieldset>
          <fieldset className='form-group'>

          <label htmlFor='stars'>Stars</label> <label className='text-danger'>{starsErrorMsg}</label>
          <input type='number' min='0' max='5' className='form-control' id='stars'
            placeholder='How many stars out of five?' {...stars} required=''/>
        </fieldset>
          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>post review
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>

      </div>

    )
  }
}


const ReviewFormValidation = createValidator({
  words: required,
  stars: required
})

export default reduxForm({
  form: 'reviewForm',
  fields,
  validate: ReviewFormValidation
})(ReviewFormRedux)
