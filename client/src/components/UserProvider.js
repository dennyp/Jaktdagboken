import React, { Component, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext({})

export class UserProvider extends Component {
  state = {
    isLoggedIn: false
  }

  async componentDidMount () {
    const res = await axios.get('/api/isAuthenticated')

    if (res.data.message === 'Authenticated') {
      this.setState({ isLoggedIn: true })
    }
  }

  login = () => {
    this.setState({ isLoggedIn: true })
  }

  logout = () => {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const { isLoggedIn } = this.state
    return (
      <UserContext.Provider
        value={{ isLoggedIn, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider
