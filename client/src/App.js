import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Search />
            </Route>
            <Route exact path='/saved'>
              <Saved />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
