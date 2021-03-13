import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

class EditPostModal extends Component {
  state = {
    post: {
      title: '',
      content: ''
    }
  }

  titleHandler = event => {
    this.props.onTitleChange(event.target.value)
  }

  render () {
    return (
      <Modal centered show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Redigera inlägg</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Titel</Form.Label>
              <Form.Control
                type='text'
                autoFocus
                value={this.props.post.title}
                onChange={this.titleHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hide}>Avbryt</Button>
          <Button>Spara</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EditPostModal
