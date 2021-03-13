import React, { Component, Fragment } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './AnimalNumbers.css'

export class AnimalNumbers extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectedNumber: `Antal ${this.props.gender}`,
    variant: 'primary'
  }

  onSelectHandler = (eventKey, event) => {
    this.setState({ selectedNumber: event.target.textContent })
    this.setState({ variant: 'success' })
    this.props.onNumberChange(this.props.gender, eventKey)
  }

  render () {
    return (
      <Fragment>
        <label>{this.props.gender}</label>
        <DropdownButton
          className='numbers-ddl'
          title={this.state.selectedNumber}
          variant={this.state.variant}
        >
          {this.state.numbers.map(number => {
            return (
              <Dropdown.Item
                key={`${this.props.gender}${number}`}
                onSelect={this.onSelectHandler}
                eventKey={number}
              >
                {number}
              </Dropdown.Item>
            )
          })}
        </DropdownButton>
      </Fragment>
    )
  }
}

export default AnimalNumbers
