import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Music from './components/music'
import Contact from './components/contact'
import About from './components/About'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="/music" component={Music} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
  </Route>
)

export default Routes
