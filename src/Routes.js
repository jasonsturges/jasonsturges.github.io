import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
