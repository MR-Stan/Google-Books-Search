import React, { Component } from 'react';

import Search from './pages/Search';
import Saved from './pages/Saved';

import Nav from './components/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RRNavLink
} from "react-router-dom";

class App extends Component {
  state = {
    query: '',
    bookResults: [],
    savedBooks: []
  }

  render() {
    return (
      <>
        <header>
          <Nav />
        </header>
        <main>
          <Router>
            <Switch>
              <Route path='/search'>
                <Search />
              </Route>
              <Route path='/saved'>
                <Saved />
              </Route>
            </Switch>
          </Router>
        </main>
      </>
    )
  }
}

export default App;
