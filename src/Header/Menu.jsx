import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import SecondaryMenu from '../Header/SecondaryMenu';


const Menu = () => {
    return(
        <Bootstrap.Navbar fixed="top" className="p-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Bootstrap.Container fluid>
                <Bootstrap.Navbar.Brand href="#home">Logo</Bootstrap.Navbar.Brand>
                <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <Bootstrap.Nav className="me-auto">
                        <Bootstrap.Nav.Link href="/">Home</Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link href="/menu">Menu</Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link href="/delivery">Delivery</Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link href="/about-us">About us</Bootstrap.Nav.Link>
                        <Bootstrap.Nav.Link href="/contact-us">Contact us</Bootstrap.Nav.Link>
                    </Bootstrap.Nav>
                    <Bootstrap.Nav>
                        <SecondaryMenu />
                    </Bootstrap.Nav>
                </Bootstrap.Navbar.Collapse>
            </Bootstrap.Container>
        </Bootstrap.Navbar>
    );
}

export default Menu;