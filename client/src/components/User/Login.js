import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap'
import Email from './Email'
import Password from './Password'
import withUser from '../withUser'
import './User.css'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    validated: false,
    alertMessage: '',
    isShown: false
  }

  onEmailChange = email => {
    this.setState({ email })
  }

  onPasswordChange = password => {
    this.setState({ password })
  }

  handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({ validated: true })
    this.login(event)
  }

  login = async event => {
    try {
      event.preventDefault()

      const { email, password } = this.state

      if (!email || !password) {
        this.setState({
          alertMessage: 'Du måste fylla i alla fält.',
          isShown: true
        })
        return
      }

      const response = await axios.post('/api/user/login', {
        email,
        password
      })

      if (response.data.message === 'Success') {
        this.setState({
          email: '',
          password: '',
          alertMessage: '',
          isShown: false,
          validated: false
        })

        // Set User as logged in and redirect
        this.props.login()
        this.props.history.push('/')
      }
    } catch {
      this.setState({
        alertMessage: 'Ogiltiga inloggningsuppgifter.',
        isShown: true
      })
    }
  }

  setAlertStyle = () => {
    return { marginTop: '20px' }
  }

  setLinkStyle = () => {
    return {
      paddingTop: '6px',
      textAlign: 'right'
    }
  }

  render () {
    const validated = this.state.validated

    return (
      <Fragment>
        <Container>
          <Row className='justify-content-md-center'>
            <Col sm={12} md={6} lg={4}>
              <Form
                noValidate
                validated={validated}
                onSubmit={this.handleSubmit}
              >
                <h2>Logga in</h2>
                <Email onChange={this.onEmailChange} />
                <Password onChange={this.onPasswordChange} />
                <Form.Group controlId='formSubmit'>
                  <Row>
                    <Col xs={6}>
                      <Button
                        variant='primary'
                        type='button'
                        onClick={this.handleSubmit}
                      >
                        Logga in
                      </Button>
                    </Col>
                    <Col style={this.setLinkStyle()} xs={6}>
                      <Link to='/register'>Registrera</Link>
                    </Col>
                  </Row>
                  <Alert
                    style={this.setAlertStyle()}
                    variant='danger'
                    show={this.state.isShown}
                  >
                    {this.state.alertMessage}
                  </Alert>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withUser(Login)
