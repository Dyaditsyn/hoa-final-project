import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Tenants extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "/#/login"
        }
        return (
            <Container className="d-flex" fluid="md">
                <Row>
                    <Col>{this.props.activeUser.role === 'tenant' ? <></> : <div></div>}</Col>
                    <Col></Col>
                </Row>
                <Row></Row>
            </Container>
        )
    }
}

export default Tenants;