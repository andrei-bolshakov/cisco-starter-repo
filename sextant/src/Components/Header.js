import React, { Component } from 'react';
import { Container, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark" variant='dark' >
                    <Container>
                        <NavbarBrand href="/">Sextant</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;