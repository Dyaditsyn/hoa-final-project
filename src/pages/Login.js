import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="p-login">
                <h1>Login to Committee Member Account </h1>
                <Form className="mt-5">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button block type="button">Log in</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <Link to="/signup">Sign up</Link>
            </div>
        )
    }
}

export default Login;