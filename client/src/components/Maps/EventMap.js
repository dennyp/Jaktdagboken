import React, { Fragment, useState } from 'react'
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps'

const EventMap = props => {
  const [selectedPosition, setSelectedPosition] = useState(null)

  const onClickHandler = event => {
    const { lat, lng } = event.latLng
    const position = { lat: lat(), lng: lng() }
    setSelectedPosition(position)
    props.onClick(position)
  }

  const pos = { lat: 56.879005, lng: 14.805852 }

  return (
    <Fragment>
      <GoogleMap onClick={onClickHandler} defaultZoom={12} defaultCenter={pos}>
        {selectedPosition && <Marker position={selectedPosition} />}
      </GoogleMap>
    </Fragment>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(EventMap))

export default props => {
  return (
    <WrappedMap
      onClick={props.onClick}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
        process.env.REACT_APP_API_KEY
      }`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
