import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap'

const Story = props => {
  return (
    <Fragment>
      <Form>
        <Form.Group controlId='formTitle'>
          <Form.Label>Titel</Form.Label>
          <Form.Control
            type='text'
            placeholder='Titel'
            autoFocus
            onChange={props.title}
          />
        </Form.Group>
        <Form.Group controlId='formText'>
          <Form.Label>Inlägg</Form.Label>
          <Form.Control
            as='textarea'
            rows='8'
            placeholder='Skriv inlägg...'
            onChange={props.content}
          />
        </Form.Group>
      </Form>
    </Fragment>
  )
}

export default Story
