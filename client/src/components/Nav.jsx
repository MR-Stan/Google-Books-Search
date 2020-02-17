import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const NavComponent = _ => {
    return (
        <Navbar>
            <NavbarBrand href='https://books.google.com/'>Google Books</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href='/'>Search</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/saved'>Saved</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavComponent;