import React, { Fragment } from 'react'
import Moment from 'moment'
import './DatePicker.css'

const DatePicker = props => {
  const onChangeHandler = event => {
    props.onChange(event.target.value)
  }

  const currentDate = Moment().format('YYYY-MM-DD')

  return (
    <Fragment>
      <label className='datepicker-label'>Välj datum</label>
      <input
        type='date'
        defaultValue={currentDate}
        onChange={onChangeHandler}
      />
    </Fragment>
  )
}

export default DatePicker
