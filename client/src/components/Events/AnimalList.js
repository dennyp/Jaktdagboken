import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import _ from 'underscore'

export class AnimalList extends Component {
  state = {
    animals: [],
    selectedAnimal: 'Välj djur',
    variant: 'primary'
  }

  setLabelStyle = () => {
    return {
      marginBottom: '0'
    }
  }

  setDdlStyle = () => {
    return {
      marginBottom: '10px'
    }
  }
  async componentDidMount () {
    const res = await axios.get('/api/getAnimals')
    const sorted = _.sortBy(res.data, 'species')
    this.setState({ animals: sorted })
  }

  onSelectHandler = (eventKey, event) => {
    this.setState({ selectedAnimal: event.target.textContent })
    this.setState({ variant: 'success' })
    this.props.onAnimalChange(eventKey)
  }

  render () {
    return (
      <Fragment>
        <Row>
          <Col>
            <label style={this.setLabelStyle()}>Djur</label>
            <DropdownButton
              style={this.setDdlStyle()}
              title={this.state.selectedAnimal}
              variant={this.state.variant}
            >
              {this.state.animals.map(animal => {
                return (
                  <Dropdown.Item
                    key={animal.species}
                    eventKey={animal.species}
                    onSelect={this.onSelectHandler}
                  >
                    {animal.species}
                  </Dropdown.Item>
                )
              })}
            </DropdownButton>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default AnimalList
