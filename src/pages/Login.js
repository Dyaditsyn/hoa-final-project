import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            pwd: '',
        }
    }
    updatePwd = (event) => {
        this.setState({
            pwd: event.target.value
        });
    }
    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    handleLogin = () => {
        console.log(this.props.allUsers)
        const foundUser = this.props.allUsers.find( (user) => {
            return (user.email === this.state.email && user.pwd === this.state.pwd);
        });
        if(foundUser) {
            this.props.login(foundUser);
            window.location.href = '/#/dashboard';
        }
        else{
            alert('Incorrect Email or Password');
        }
    }
    render() {
        return (
            <div className="p-login">
                <h1>Login to HomeOwner Assosiation Management System</h1>
                <Form className="mt-5">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" onChange={this.updateEmail} value={this.state.email}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" onChange={this.updatePwd} value={this.state.pwd}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={this.handleLogin} variant="success" block type="button">Log in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <Link to="/signup">Sign up</Link>
            </div>
        )
    }
}

export default Login;