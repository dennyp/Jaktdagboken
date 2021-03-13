import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'

const AnimalWeight = props => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Row>
            <Col>
              <label>Vikt</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type='number'
                placeholder='Vikt (kg)'
                onChange={props.onChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AnimalWeight
