import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant='dark' >
                    <Container>
                        <NavbarBrand href="/">
                            <a className="navbar-brand">Sextant</a>
                        </NavbarBrand>
                        {/* <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">About</Nav.Link>
                                <Nav.Link href="/">Contacts</Nav.Link>
                                <Nav.Link href="/">Blog</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;