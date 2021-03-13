import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

const AnimalGender = props => {
  const genders = ['Hane', 'Hona', 'Okänd']

  const onGenderHandler = event => {
    props.gender(event.target.value)
  }

  return (
    <Fragment>
      <Row>
        <Col>
          <label>Kön</label>
        </Col>
      </Row>
      <Row>
        {genders.map(gender => {
          return (
            <Fragment key={gender}>
              <Col>
                <input
                  type='radio'
                  value={gender}
                  name='gender'
                  key={gender}
                  onClick={onGenderHandler}
                />
                <label htmlFor={gender} key={`${gender}label`}>
                  {gender}
                </label>
              </Col>
            </Fragment>
          )
        })}
      </Row>
    </Fragment>
  )
}

AnimalGender.propTypes = {
  gender: PropTypes.func.isRequired
}

export default AnimalGender
