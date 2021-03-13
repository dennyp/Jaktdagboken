import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

const Email = props => {
  const onEmailChange = event => {
  props.onChange(event.target.value)
}

  return (
    <Fragment>
      <Form.Group controlId='formEmail'>
        <Form.Label>E-postadress</Form.Label>
        <Form.Control
          required
          type='email'
          placeholder='Ange e-postadress'
          onChange={onEmailChange}
        />
        <Form.Control.Feedback type='invalid'>
          Ange giltig e-postadress.
        </Form.Control.Feedback>
      </Form.Group>
    </Fragment>
  )
}

export default Email
