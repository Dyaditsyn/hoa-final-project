import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            pwd: '',
            building: '',
            adress: '',
            city: '',
            tel: ''
        }
    }
    createUser = () => {
        const newUserObj = {
            name: 'this.state.name',
            email: 'this.state.email',
            pwd: 'this.state.pwd',
            building: 'this.state.building',
            adress: 'this.state.adress',
            city: 'this.state.city',
            tel: 'this.state.tel'
        }
        this.props.addUser(newUserObj);
    }
    render() {
        return (
            <div className="p-signup">
                <h1>Sign up to HomeOwner assosiation management system</h1>
                <Form className="mt-5">

                    <Form.Group controlId="formBasicName">
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({pwd: e.target.value})} value={this.state.pwd}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicBuilding">
                        <Form.Label column sm={2}>
                        Building/Condominium
                        </Form.Label >
                        <Form.Control type="text" placeholder="Building/Condominium" onChange={(e) => this.setState({building: e.target.value})} value={this.state.building}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAdress">
                        <Form.Label column sm={2}>
                        Adress
                        </Form.Label>
                        <Form.Control type="text" placeholder="Adress" onChange={(e) => this.setState({adress: e.target.value})} value={this.state.adress}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label column sm={2}>
                        City
                        </Form.Label>
                        <Form.Control type="text" placeholder="City" onChange={(e) => this.setState({city: e.target.value})} value={this.state.city}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label column sm={2}>
                        Phone number
                        </Form.Label>
                        <Form.Control type="number" placeholder="Phone number" onChange={(e) => this.setState({tel: e.target.value})} value={this.state.tel}/>
                    </Form.Group>

                    <Form.Group>
                        <Button onClick={this.createUser} variant="success" block type="button">Sign up!</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Signup;