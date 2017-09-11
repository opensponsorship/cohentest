'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import AppContainer from './AppContainer'
import BasicInfo from './BasicInfo'
import About from './About'
import Confirm from './Confirm'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <Route path='welcome' component={BasicInfo} />
      <Route path='about' component={About} />
      <Route path='confirm' component={Confirm} />
      <IndexRedirect to='/welcome' />
    </Route>
  </Router>,
  document.getElementById('app')
)
