import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

const fields = ['blurb', 'price', 'calories', 'name']

class DishFormRedux extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
		createDish: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render () {
    const {fields: {blurb, price, name, calories, map}, handleSubmit, submitting} = this.props
    const nameErrorMsg = name.touched && name.error ? name.error : ''

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
	    	})} className='form' role='form'>
        <fieldset className='form-group'>
          <label htmlFor='name'>Name</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='text' className='form-control' id='name'
            placeholder='Enter name of the dish' {...name} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='calories'>Name</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='number' className='form-control' id='calories'
            placeholder='How many calories does this dish have?' {...calories} required=''/>
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor='price'>Price</label> <label className='text-danger'>{nameErrorMsg}</label>
          <input type='number' className='form-control' id='price'
            placeholder='How much does it cost?' {...price} required=''/>
        </fieldset>
          <fieldset className='form-group'>
            <label htmlFor='blurb'>Blurb</label> <label className='text-danger'>{nameErrorMsg}</label>
            <input type='text' className='form-control' id='blurb'
              placeholder='Tell us a little bit about the dish' {...blurb} required=''/>
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
  form: 'dishForm',
  fields,
})(DishFormRedux)
