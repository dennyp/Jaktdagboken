import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'

// TODO: Check for minimum password length.

const Password = props => {
  const onPasswordChange = event => {
    props.onChange(event.target.value)
  }

  return (
    <Fragment>
      <Form.Group controlId='formPassword'>
        <Form.Label>Lösenord</Form.Label>
        <Form.Control
          required
          type='password'
          placeholder='Ange lösenord'
          onChange={onPasswordChange}
        />
        <Form.Control.Feedback type='invalid'>
          Ange ett lösenord som är längre än 8 tecken.
        </Form.Control.Feedback>
      </Form.Group>
    </Fragment>
  )
}

export default Password
