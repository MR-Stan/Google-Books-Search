import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RRNavLink
} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';
import Search from './components/Search.jsx';
import Saved from './components/Saved.jsx';
import './assets/css/App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/search');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar>
            <NavbarBrand href='https://books.google.com/'>Google Books</NavbarBrand>
            <Nav>
              <NavLink tag={RRNavLink} exact to='/search' activeClassName='active'>Search</NavLink>
              <NavLink tag={RRNavLink} exact to='/saved' activeClassName='active'>Saved</NavLink>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/saved'>
              <Saved />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
