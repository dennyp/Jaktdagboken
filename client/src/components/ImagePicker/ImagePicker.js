import './ImagePicker.css'
import React, { Component, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'

class ImagePicker extends Component {
  constructor (props) {
    super(props)

    this.fileUploader = React.createRef()
    this.state = { filesToUpload: [] }
  }

  fileSelectedHandler = event => {
    if (event.target.files.length === 0) return

    const newFile = event.target.files[0]
    if (!this.state.filesToUpload.some(x => x.name === newFile.name)) {
      this.props.addImage(newFile)
    }
  }

  removeImageHandler = event => {
    event.preventDefault()
    const name = event.target.attributes.getNamedItem('data-id').value
    this.props.removeImage(name)

    // Clearing file input so you can choose the same image you removed
    this.fileUploader.current.value = ''
  }

  render () {
    return (
      <Fragment>
        <Row>
          <Col>
            {/* TODO: Check the content type to match image/jpeg or image/png. */}
            <label className='image-label'>Ladda upp bild</label>
            <input
              ref={this.fileUploader}
              className='image-input'
              type='file'
              onChange={this.fileSelectedHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {/* TODO: Show image in a thumbnail in the list instead of only the name. */}
            <ul className='list-group list-group-horizontal-sm'>
              {this.props.images.map(x => {
                return (
                  <li className='list-group-item' key={x.name}>
                    {x.name}
                    <button
                      className='remove-image-button'
                      data-id={x.name}
                      onClick={this.removeImageHandler}
                    >
                      x
                    </button>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default ImagePicker
