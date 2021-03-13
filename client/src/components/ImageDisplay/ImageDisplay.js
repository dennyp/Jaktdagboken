import React, { Fragment } from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import './ImageDisplay.css'

const ImageDisplay = props => {
  return (
    <Fragment>
      <Row>
        <h6>Bilder</h6>
        <div className='image-container'>
          {props.imageIds.map(imageId => {
            return (
              <Col key={imageId} xs={3}>
                <Image
                  className='post-image'
                  src={`/api/diary/image/${imageId}`}
                  alt='Bild från jakt'
                  fluid
                  thumbnail
                />
              </Col>
            )
          })}
        </div>
      </Row>
    </Fragment>
  )
}

export default ImageDisplay
