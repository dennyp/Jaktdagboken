import React, { Component, Fragment } from 'react'
import Email from './Email'
import Password from './Password'
import Fullname from './Fullname'
import axios from 'axios'
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap'
import './User.css'

export class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    validated: false,
    alertMessage: '',
    isShown: false
  }

  handleSubmit = async event => {
    try {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      this.setState({ validated: true })

      const { email, password, name } = this.state

      if (!email || !password || !name) {
        this.setState({
          alertMessage: 'Du måste fylla i alla fält.',
          isShown: true
        })
        return
      }

      if (!this.validateEmail(email)) {
        this.setState({
          alertMessage: 'Du måste ange giltig E-postadress.',
          isShown: true
        })
        return
      }

      const res = await axios.post('/api/user/register', {
        email,
        password,
        name
      })

      if (res.data.message === 'Success') {
        this.setState({
          email: '',
          password: '',
          alertMessage: '',
          isShown: false,
          validated: false
        })
        this.props.history.push('/login')
      }
    } catch {
      this.setState({ alertMessage: 'Något gick snett.', isShown: true })
    }
  }

  validateEmail = email => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  onEmailChange = email => {
    this.setState({ email })
  }

  onPasswordChange = password => {
    this.setState({ password })
  }

  onNameChange = name => {
    this.setState({ name })
  }

  setAlertStyle = () => {
    return { marginTop: '20px' }
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
                <h2>Registrera konto</h2>
                <Email onChange={this.onEmailChange} />
                <Password onChange={this.onPasswordChange} />
                <Fullname onChange={this.onNameChange} />
                <Form.Group controlId='formSubmit'>
                  <Row>
                    <Col xs={6}>
                      <Button
                        variant='primary'
                        type='button'
                        onClick={this.handleSubmit}
                      >
                        Registrera
                      </Button>
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

export default Register
