import React from 'react';
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
    NavItem,
    NavLink
} from 'reactstrap';


const NavComponent = _ => {
    return (
        <Router>
            <Navbar>
                <NavbarBrand href='https://books.google.com/'>Google Books</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} exact to='/search' activeClassName='active'>Search</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRNavLink} exact to='/saved' activeClassName='active'>Saved</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </Router>
    )
}

export default NavComponent;