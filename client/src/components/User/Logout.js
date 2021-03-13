import React from 'react'
import axios from 'axios'
import withUser from '../withUser'

const Logout = props => {
  const logout = async () => {
    await axios.get('/api/user/logout')

    // Set User as logged out and redirect
    props.logout()
    props.history.push('/')
  }

  logout()

  return (
    <div>
      <p>Du har loggat ut.</p>
    </div>
  )
}

export default withUser(Logout)
