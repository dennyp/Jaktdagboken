import React, { Fragment, useState } from 'react'
import {
  GoogleMap,
  Marker,
  InfoWindow,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps'
import _ from 'underscore'
import { addNumbers } from '../../utils/utils'

// TODO: Turn on geolocation
const Map = props => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const pos = { lat: 56.879005, lng: 14.805852 }

  return (
    <Fragment>
      <GoogleMap defaultZoom={12} defaultCenter={pos}>
        {props.events &&
          props.events.map(event => (
            <Marker
              key={_.uniqueId(event.id)}
              position={event.position}
              onClick={() => {
                setSelectedEvent(event)
              }}
            />
          ))}

        {selectedEvent && (
          <InfoWindow
            position={selectedEvent.position}
            onCloseClick={() => {
              setSelectedEvent(null)
            }}
          >
            <div>
              <h6>Händelse</h6>
              <p>{selectedEvent.event}</p>
              <h6>Djur</h6>
              <p>{selectedEvent.animal}</p>
              <h6>Antal</h6>
              <p>{addNumbers(selectedEvent.numbers)}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </Fragment>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default props => {
  return (
    <WrappedMap
      isMarkerShown={props.isMarkerShown}
      events={props.events}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
        process.env.REACT_APP_API_KEY
      }`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
