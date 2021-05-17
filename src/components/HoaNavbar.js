
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class HoaNavbar extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        // tenant/commette member links shown only after authorization
        const menuEl = (this.props.activeUser) ? 
        <Nav variant="primary" className="mr-auto">
            <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/#/tenants">Tenants</Nav.Link>
            <Nav.Link href="/#/messages">Messages</Nav.Link>
            <Nav.Link href="/#/issues">Issues</Nav.Link>
            <Nav.Link href="/#/voting">Voting</Nav.Link>
        </Nav>
            : null;
        // before authorization shown only navbar brand and login/sigup options
        // after authorization switch to log out
        const loginEl = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">Login</Nav.Link> : null;
        const signupEl = ( ! this.props.activeUser) ?  <Nav.Link href="/#/signup">Sign Up</Nav.Link> : null;
        const nameEl = ( this.props.activeUser) ?  <Nav.Link disabled>Hello {this.props.activeUser.name}</Nav.Link> : null;
        const logoutEl= (this.props.activeUser) ? 
        <Nav.Link href="/#/" onClick={ () => {this.props.handleLogout()} }>
            Log out
        </Nav.Link> 
        : null;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">HOA Systems</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {menuEl}
                    <Nav className="ml-auto">
                        {loginEl}
                        {signupEl}
                        {nameEl}
                        {logoutEl}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HoaNavbar;