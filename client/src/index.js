import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import Login from './components/User/Login'
import Register from './components/User/Register'
import Logout from './components/User/Logout'
import DiaryPost from './components/DiaryPost/DiaryPost'
import Error from './components/Error'
import Navigation from './components/Navigation/Navigation'
import UserProvider from './components/UserProvider'

ReactDOM.render(
  <Router>
    <UserProvider>
      <ErrorBoundary>
        <Navigation />
        <Switch>
          <Route path='/' component={App} exact />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/diarypost' component={DiaryPost} />
          <Route component={Error} />
        </Switch>
      </ErrorBoundary>
    </UserProvider>
  </Router>,
  document.getElementById('root')
)
