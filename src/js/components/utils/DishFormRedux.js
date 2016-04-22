import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {createValidator, required} from '../../middleware/validation'
import { Link } from 'react-router'

const fields = ['blurb', 'price', 'calories', 'name']

class DishFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		createDish: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    resetForm: PropTypes.func.isRequired,
  };

  render () {
    let hiddenValue = this.props.hiddenValue
    let toggleHidden = this.props.toggleHidden
    let toggleDishModal = this.props.toggleDishModal
        let successStyles = {
            display: hiddenValue,
            background: "lightgreen",
            height: "60px",
            width: "100%",
            textAlign: "center"
          }
    const {fields: {blurb, price, name, calories, map}, handleSubmit, resetForm, submitting} = this.props
    const blurbErrorMsg = blurb.touched && blurb.error ? blurb.error : ''
    const priceErrorMsg = price.touched && price.error ? price.error : ''
    const nameErrorMsg = name.touched && name.error ? name.error : ''
    const caloriesErrorMsg = calories.touched && calories.error ? calories.error : ''

    return (
      <div className='dishForm'>
        <form onSubmit={handleSubmit( data => {
          let newDishObject = {}
          newDishObject.name = data.name
          newDishObject.calories = data.calories
          newDishObject.price = data.price
          newDishObject.spot = this.props.thisSpot
          newDishObject.blurb = data.blurb
          this.props.createDish(newDishObject)
          resetForm()
          toggleDishModal()
	    	})} className='form' role='form'>
        <fieldset className='form-group'>
          <label htmlFor='name'>Name</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='text' className='form-control' id='name'
            placeholder='Enter name of the dish' {...name} required=''/>
        </fieldset>

          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{blurbErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Tell us a little bit about the dish' {...blurb} required=''/>
          </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='calories'>Calories</label> <label className='text-danger'>{caloriesErrorMsg}</label>
          <input type='number' className='form-control' id='calories'
            placeholder='How many calories does this dish have?' {...calories} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='price'>Price</label> <label className='text-danger'>{priceErrorMsg}</label>
          <input type='number' className='form-control' id='price'
            placeholder='How much does it cost?' {...price} required=''/>
        </fieldset>

          <button type='submit' className='btn btn-primary btn-block' disabled={submitting}>Save
            {submitting ? <span className='loader glyphicon glyphicon-refresh spin'></span>
              : <span></span>}
          </button>
        </form>
        <div style={successStyles}><h2>Dish pending review! <Link onClick={toggleHidden} to="index/login"> Back to the dashboard? </Link>.</h2></div>

      </div>

    )
  }
}


const DishFormValidation = createValidator({
  blurb: required,
  price: required,
  name: required,
  calories: required,
})

export default reduxForm({
  form: 'dishForm',
  fields,
  validate: DishFormValidation
})(DishFormRedux)
