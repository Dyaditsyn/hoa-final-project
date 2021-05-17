
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class HoaNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">HOA Systems</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="primary" className="mr-auto">
                        <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/#/tenants">Tenants</Nav.Link>
                        <Nav.Link href="/#/messages">Messages</Nav.Link>
                        <Nav.Link href="/#/issues">Issues</Nav.Link>
                        <Nav.Link href="/#/voting">Voting</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/#/login">Login</Nav.Link>
                        <Nav.Link href="/#/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HoaNavbar;