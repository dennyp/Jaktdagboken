import React, { Component } from 'react'
import _ from 'underscore'
import AnimalList from './AnimalList'
import AnimalNumbers from './AnimalNumbers/AnimalNumbers'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import Map from '../Maps/EventMap'

export class Observation extends Component {
  state = {
    id: '',
    event: 'Observation',
    animal: '',
    numbers: {
      unknown: 0,
      male: 0,
      female: 0
    },
    time: '',
    position: {
      lat: 0,
      lng: 0
    }
  }

  checkNumbersGreaterThanZero = () => {
    return (
      this.state.numbers.unknown > 0 ||
      this.state.numbers.male > 0 ||
      this.state.numbers.female > 0
    )
  }

  saveEventHandler = event => {
    event.preventDefault()
    if (this.state.animal && this.checkNumbersGreaterThanZero()) {
      this.props.onHide()
      this.props.addEvent(this.state)
    } else {
      // TODO: Add alert to show that you cannot save without picking an animal.
    }
  }

  onChangeHandler = event => {
    const value = event.target.value
    if (value <= 0) event.target.value = 0
  }

  onAnimalChange = animal => {
    this.setState({ animal, id: _.uniqueId(`${animal}${this.state.event}`) })
  }

  onNumberChange = (gender, number) => {
    switch (gender) {
      case 'Okänd':
        this.setState({
          numbers: _.extend(this.state.numbers, { unknown: number })
        })
        break
      case 'Hane':
        this.setState({
          numbers: _.extend(this.state.numbers, { male: number })
        })
        break
      case 'Hona':
        this.setState({
          numbers: _.extend(this.state.numbers, { female: number })
        })
        break
    }
  }

  onTimeChange = event => {
    const time = event.target.value
    this.setState({ time })
  }

  onEventLocationClick = position => {
    this.setState({ position })
  }

  render () {
    return (
      <Modal centered show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Lägg till händelse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <AnimalList onAnimalChange={this.onAnimalChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <AnimalNumbers
                  gender='Okänd'
                  onNumberChange={this.onNumberChange}
                />
              </Col>
              <Col>
                <AnimalNumbers
                  gender='Hane'
                  onNumberChange={this.onNumberChange}
                />
              </Col>
              <Col>
                <AnimalNumbers
                  gender='Hona'
                  onNumberChange={this.onNumberChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input type='time' onChange={this.onTimeChange} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Map onClick={this.onEventLocationClick} />
              </Col>
            </Row>
          </Container>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Avbryt</Button>
            <Button onClick={this.saveEventHandler}>Spara</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Observation
