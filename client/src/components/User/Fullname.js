import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

const Fullname = props => {
  const onNameChange = event => {
    props.onChange(event.target.value)
  }

  return (
    <Fragment>
      <Form.Group controlId='formFullname'>
        <Form.Label>Namn</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder='Ange namn'
          onChange={onNameChange}
        />
        <Form.Control.Feedback type='invalid'>
          Ange ditt namn.
        </Form.Control.Feedback>
      </Form.Group>
    </Fragment>
  )
}

export default Fullname
