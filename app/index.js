import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

/*
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import About from './components/About'
import Contact from './components/Contact'

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      // {make them children of `App` }
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('root'))
*/

ReactDom.render(<App />, document.getElementById('root'))
