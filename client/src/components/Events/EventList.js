import React, { Fragment } from 'react'
import { Table, Button } from 'react-bootstrap'
import { addNumbers } from '../../utils/utils'

const EventList = props => {
  return (
    <Fragment>
      {props.events.length > 0 && (
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Händelse</th>
              <th>Djur</th>
              <th>Antal</th>
            </tr>
          </thead>
          <tbody>
            {props.events.map(event => {
              return (
                <tr key={event.id}>
                  <td>{event.event}</td>
                  <td>{event.animal}</td>
                  <td>{addNumbers(event.numbers)}</td>
                  {props.removeEvent && (
                    <td>
                      <Button
                        data-id={event.id}
                        size='sm'
                        onClick={props.removeEvent}
                      >
                        Ta bort
                      </Button>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </Fragment>
  )
}

export default EventList
