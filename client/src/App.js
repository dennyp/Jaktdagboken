import React, { Component, Fragment } from 'react'
import './App.css'
import withAuth from './components/withAuth'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import moment from 'moment'
import EventList from './components/Events/EventList'
import Map from './components/Maps/Map'
import ImageDisplay from './components/ImageDisplay/ImageDisplay'
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal'
// import EditPostModal from './components/EditPostModal/EditPostModal'
// import _ from 'underscore'

export class App extends Component {
  state = {
    posts: [],
    events: [],
    showConfirmationModal: false,
    showEditPostModal: false,
    postToEdit: {
      id: '',
      title: '',
      content: '',
      events: [],
      imageIds: [],
      date: '',
      createdBy: '',
      createdAt: ''
    },
    postToDeleteId: ''
  }


  componentDidMount () {
    this.getUserPosts()
  }

  async getUserPosts () {
    try {
      const res = await axios.get('/api/diary')
      const posts = res.data.message

      posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })

      this.setState({ posts })
      this.getEventsFromPosts()
    } catch (err) {
      // TODO: Display error message
    }
  }

  getEventsFromPosts = () => {
    let events = []
    this.state.posts.map(post => {
      return post.events.map(event => {
        return events.push(event)
      })
    })

    this.setState({ events })
  }

  checkIfShouldDelete = event => {
    const postId = event.target.value
    this.setState({ showConfirmationModal: true, postToDeleteId: postId })
  }

  confirmDelete = confirmation => {
    if (confirmation) {
      this.deleteUserPost(this.state.postToDeleteId)
    }

    this.setState({showConfirmationModal: false, postToDeleteId: ''})
  }

  deleteUserPost = async postId => {
    try {
      await axios.delete(`/api/diary/delete/${postId}`)
      // TODO: Perhaps not optimal to have to fetch the posts again.
      this.getUserPosts()
    } catch (error) {
      // TODO: Display error message
    }
  }

  editPostHandler = event => {
    const postId = event.target.value
    this.fetchDiaryPost(postId)
    this.setState({ showEditPostModal: true })
  }

  fetchDiaryPost = async postId => {
    try {
      const res = await axios.get(`/api/diary/${postId}`)
      this.setState({ postToEdit: res.data.post })
    } catch (error) {
      // TODO: Display error message
    }
  }

  // TODO: Create pagination so only the 5 or 10 most recent posts show on the first page.
  render () {
    return (
      <Fragment>
        <ConfirmationModal
          show={this.state.showConfirmationModal}
          confirm={this.confirmDelete}
        />
        {/* <EditPostModal
          show={this.state.showEditPostModal}
          hide={() => this.setState({ showEditPostModal: false })}
          post={this.state.postToEdit}
          onTitleChange={title => {
            this.setState({
              postToEdit: _.extend(this.state.postToEdit, { title: title })
            })
          }}
        /> */}
        <Container className='user-posts'>
          <Row>
            <Col xs={12} md={6}>
              {this.state.posts.map(post => {
                return (
                  <div className='post' key={post._id}>
                    <h3>{post.title}</h3>
                    <span className='post-date'>
                      Datum: {moment(post.date).format('YYYY-MM-DD')}
                    </span>
                    <p>{post.content}</p>
                    <EventList events={post.events} />
                    <ImageDisplay imageIds={post.imageIds} />
                    <div className='post-button-container'>
                      {/* <Button
                        className='edit-button'
                        size='sm'
                        value={post._id}
                        onClick={this.editPostHandler}
                      >
                        Redigera
                      </Button> */}
                      <Button
                        className='delete-button'
                        size='sm'
                        value={post._id}
                        onClick={this.checkIfShouldDelete}
                      >
                        Ta bort
                      </Button>
                    </div>
                  </div>
                )
              })}
            </Col>
            <Col>
              <div className='map-container'>
                <Map events={this.state.events} isMarkerShown />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withAuth()(App)
