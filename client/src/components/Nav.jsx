import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../assets/css/Nav.css';

const NavComponent = _ => {
    return (
        <Navbar className='bg-primary navbar'>
            <NavbarBrand className='navbrand-text' style={{ color: 'white'}} href='https://books.google.com/'>Google Books</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink className='nav-text' style={{ color: 'white' }} href='/'>Search</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-text' style={{ color: 'white' }} href='/saved'>Saved</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavComponent;