
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HoaNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // tenant/commette member links shown only after authorization
        const menuEl = (this.props.activeUser) ? 
        <Nav variant="primary" className="mr-auto">
            <Link component={Nav.Link} to="#/dashboard">Dashboard</Link>
            <Link component={Nav.Link} to="#/tenants">Tenants</Link>
            <Link component={Nav.Link} to="#/messages">Messages</Link>
            <Link component={Nav.Link} to="#/issues">Issues</Link>
            <Link component={Nav.Link} to="#/voting">Voting</Link>
        </Nav>
            : null;
        // before authorization shown only navbar brand and login/sigup options
        // after authorization switch to log out
        const loginEl = ( ! this.props.activeUser) && <Link component={Nav.Link} to="#/login">Login</Link> ;
        const signupEl = ( ! this.props.activeUser) &&  <Link component={Nav.Link} to="#/signup">Sign Up</Link>;
        const nameEl = ( this.props.activeUser) &&  <Link component={Nav.Link} disabled>Hello {this.props.activeUser.name}</Link>;
        const logoutEl= (this.props.activeUser) &&
        <Link component={Nav.Link} to="#/" onClick={this.props.handleLogout}>
            Log out
        </Link> 
        
        return (
            <Navbar bg="light" expand="lg" className="mb-3">
                <Link component={Navbar.Brand} to="#/">HOA Systems</Link>
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