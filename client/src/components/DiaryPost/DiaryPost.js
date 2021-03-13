import React, { Component, Fragment } from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Story from '../Story'
import ImagePicker from '../ImagePicker/ImagePicker'
import Event from '../Events/Event'
import Map from '../Maps/Map'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import axios from 'axios'
import withAuth from '../withAuth'
import moment from 'moment'
import './DiaryPost.css'

export class DiaryPost extends Component {
  state = {
    title: '',
    content: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    images: [],
    events: [],
    imageIds: [],
    showSpinner: false
  }

  addEvent = event => {
    this.setState({ events: [...this.state.events, event] })
  }

  removeEvent = event => {
    const eventId = event.target.attributes.getNamedItem('data-id').value

    this.setState({
      events: this.state.events.filter(event => {
        return event.id !== eventId
      })
    })
  }

  saveDiaryPost = async event => {
    try {
      if (this.state.title) {
        this.setState({ showSpinner: true })

        // TODO: check file size and filetype
        const fd = new FormData()
        this.state.images.map(image => {
          return fd.append('images', image, image.name)
        })

        const upload = await axios.post('/api/diary/upload', fd)
        upload.data.info.map(image => {
          return this.setState({ imageIds: [...this.state.imageIds, image.id] })
        })

        const res = await axios.post('/api/diary', this.state)
        if (res.data.message === 'Success') {
          this.props.history.push('/')
        } else {
          // TODO: Notify user that the post wasn't saved.
        }
      }
    } catch (err) {}
  }

  onTitleChange = event => {
    const title = event.target.value
    this.setState({ title })
  }

  onContentChange = event => {
    const content = event.target.value
    this.setState({ content })
  }

  onTimeChange = date => {
    this.setState({ date })
  }

  addImage = image => {
    this.setState({
      images: [...this.state.images, image]
    })
  }

  removeImage = imageName => {
    this.setState({
      images: this.state.images.filter(x => {
        return x.name !== imageName
      })
    })
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <div className='post'>
              <Story
                title={this.onTitleChange}
                content={this.onContentChange}
              />
              <DatePicker onChange={this.onTimeChange} />
              <ImagePicker
                images={this.state.images}
                addImage={this.addImage}
                removeImage={this.removeImage}
              />
              <Event
                events={this.state.events}
                addEvent={this.addEvent}
                removeEvent={this.removeEvent}
              />
              <Button
                className='save-button'
                type='button'
                onClick={this.saveDiaryPost}
              >
                {!this.state.showSpinner && 'Spara inlägg'}
                {this.state.showSpinner && (
                  <Fragment>
                    <Spinner
                      className='save-spinner'
                      animation='grow'
                      as='span'
                      size='sm'
                    />
                    Sparar...
                  </Fragment>
                )}
              </Button>
            </div>
          </Col>
          <Col>
            <div className='map-container'>
              <Map events={this.state.events} isMarkerShown />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withAuth()(DiaryPost)
