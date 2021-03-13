import React, { Component } from 'react'
import AnimalList from './AnimalList'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import Map from '../Maps/EventMap'
import AnimalWeight from './AnimalWeight'
import AnimalNumbers from './AnimalNumbers/AnimalNumbers'
import _ from 'underscore'

export class Shooting extends Component {
  state = {
    id: '',
    event: 'Skott',
    animal: '',
    gender: '',
    time: '',
    weight: 0,
    position: {
      lat: 0,
      lng: 0
    },
    numbers: {
      unknown: 0,
      male: 0,
      female: 0
    }
  }

  onAnimalChange = animal => {
    this.setState({ animal, id: _.uniqueId(`${animal}${this.state.event}`) })
  }

  genderHandler = gender => {
    this.setState({ gender })
  }

  onTimeChange = event => {
    const time = event.target.value
    this.setState({ time })
  }

  onWeightHandler = event => {
    if (event.target.value >= 0) {
      this.setState({ weight: event.target.value })
    } else {
      event.target.value = 0
    }
  }

  saveEventHandler = () => {
    // TODO: Alert user that he has to pick and animal etc
    if (this.state.animal) {
      this.props.onHide()
      this.props.addEvent(this.state)
    }
  }

  onEventPositionClick = position => {
    this.setState({ position })
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

  render () {
    return (
      <Modal centered show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Lägg till händelse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <AnimalList onAnimalChange={this.onAnimalChange} />
            <AnimalWeight onChange={this.onWeightHandler} />
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
            <input type='time' onChange={this.onTimeChange} />
            <Map onClick={this.onEventPositionClick} />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Avbryt</Button>
          <Button onClick={this.saveEventHandler}>Spara</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Shooting
