import React from 'react'
import { Redirect } from 'react-router-dom'
import withUser from './withUser'

const withAuth = () => Component => {
  const Auth = props => {
    const { isLoggedIn } = props

    if (!isLoggedIn) return <Redirect to='/login' />

    return <Component {...props} />
  }

  return withUser(Auth)
}

export default withAuth
