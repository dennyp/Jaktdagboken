import React, { Fragment } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ConfirmationModal = props => {
  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={() => props.confirm(false)}
        centered
        size='sm'
        backdrop='static'
      >
        <Modal.Header closeButton>
          <Modal.Title>Bekräfta borttagning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Är du säker på att du vill radera?</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.confirm(false)}>Avbryt</Button>
          <Button onClick={() => props.confirm(true)}>OK</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default ConfirmationModal
