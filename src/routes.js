import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Music from './components/Music'
import Contact from './components/Contact'
import About from './components/About'
import Photos from './components/Photos'
import Landing from './components/Landing'
import Videos from './components/Videos'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/music" component={Music} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/photos" component={Photos} />
    <Route path="/landing" component={Landing} />
    <Route path="/videos" component={Videos} />
  </Route>
)

export default Routes
