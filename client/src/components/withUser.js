import React from 'react'
import { UserContext } from './UserProvider'

const withUser = Component => props => {
  return (
    <UserContext.Consumer>
      {user => <Component {...user} {...props} />}
    </UserContext.Consumer>
  )
}

export default withUser
