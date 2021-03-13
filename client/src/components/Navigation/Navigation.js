import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import withUser from '../withUser'
import './Navigation.css'

const Navigation = props => {
  const { isLoggedIn } = props

  return (
    <Fragment>
      <div className='navbar'>
        <NavLink className='logo' to='/'>JAKTDAGBOKEN</NavLink>
        {isLoggedIn && <NavLink to='diarypost'>Skapa inlägg</NavLink>}
        {!isLoggedIn && <NavLink to='login'>Logga in</NavLink>}
        {!isLoggedIn && <NavLink to='register'>Registrera</NavLink>}
        {isLoggedIn && <NavLink to='logout'>Logga ut</NavLink>}
      </div>
    </Fragment>
  )
}

export default withUser(Navigation)
