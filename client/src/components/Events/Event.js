import React, { Component, Fragment } from 'react'
import Observation from './Observation'
import Shooting from './Shooting'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import EventList from './EventList'

export class Event extends Component {
  state = {
    eventValue: '',
    isObservation: false,
    isShooting: false
  }

  eventSelectedHandler = (eventKey, event) => {
    this.setState({ eventValue: eventKey })
    switch (eventKey) {
      case 'observation':
        this.setState({ isObservation: true, isShooting: false })
        break
      case 'shooting':
        this.setState({ isShooting: true, isObservation: false })
        break
      default:
        this.setState({ isObservation: false, isShooting: false })
        break
    }
  }

  shootingModalClose = () => {
    this.setState({ isShooting: false })
    this.setState({ eventValue: 'default' })
  }

  observationModalClose = () => {
    this.setState({ isObservation: false })
    this.setState({ eventValue: 'default' })
  }

  render () {
    return (
      <Fragment>
        <DropdownButton
          id='dropdown-basic-button'
          data-test='EventDropdown'
          title='Lägg till händelse'
          value={this.state.eventValue}
          onSelect={this.eventSelectedHandler}
        >
          <Dropdown.Item eventKey='observation'>Observation</Dropdown.Item>
          <Dropdown.Item eventKey='shooting'>Skott</Dropdown.Item>
        </DropdownButton>
        <Observation
          show={this.state.isObservation}
          onHide={this.observationModalClose}
          addEvent={this.props.addEvent}
        />
        <Shooting
          show={this.state.isShooting}
          onHide={this.shootingModalClose}
          addEvent={this.props.addEvent}
        />
        {this.props.events.length > 0 && (
          <EventList
            events={this.props.events}
            removeEvent={this.props.removeEvent}
          />
        )}
      </Fragment>
    )
  }
}

export default Event
