import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pwd: '',
            building: '',
            adress: '',
            city: '',
            pwd2: ''
        }
    }
    createUser = () => {
        //TODO bootstrap validation form
        if(this.state.name.trim() === ''){
            return alert('Name is required')
        }
        if(this.state.email.trim() === ''){
            return alert('Email is required')
        }
        if(this.state.pwd.trim() === ''){
            return alert('Password is required')
        }
        if(this.state.building.trim() === ''){
            return alert('Building number/Condominium name is required')
        }
        if(this.state.city.trim() === ''){
            return alert('Building number/COndominium name is required')
        }

        if(this.state.pwd.trim() !== this.state.pwd2.trim()){
            return alert('Password does not match')
        }
        
        const newUserObj = {
            name: this.state.name,
            email: this.state.email,
            pwd: this.state.pwd,
            building: this.state.building,
            adress: this.state.adress,
            city: this.state.city,
        }
        this.props.addUser(newUserObj);
        window.location.href = '/#/dashboard';
    }
    render() {
        return (
            <div className="p-signup">
                <h1>Signup as Committee Member</h1>
                <Form className="mt-5">

                    <Form.Group controlId="formBasicName">
                        <Form.Label column sm={2}>
                            Name*
                        </Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label column sm={2}>
                            Email*
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label column sm={2}>
                            Password*
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => this.setState({ pwd: e.target.value })} value={this.state.pwd} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword2">
                        <Form.Label column sm={2}>
                            Re-enter Password*
                        </Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" onChange={(e) => this.setState({ pwd2: e.target.value })} value={this.state.pwd2} />
                    </Form.Group>

                    <Form.Group controlId="formBasicBuilding">
                        <Form.Label column sm={2}>
                            Building/Condominium*
                        </Form.Label >
                        <Form.Control type="text" placeholder="Building/Condominium" onChange={(e) => this.setState({ building: e.target.value })} value={this.state.building} />
                    </Form.Group>

                    <Form.Group controlId="formBasicAdress">
                        <Form.Label column sm={2}>
                            Adress*
                        </Form.Label>
                        <Form.Control type="text" placeholder="Adress" onChange={(e) => this.setState({ adress: e.target.value })} value={this.state.adress} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCity">
                        <Form.Label column sm={2}>
                            City*
                        </Form.Label>
                        <Form.Control type="text" placeholder="City" onChange={(e) => this.setState({ city: e.target.value })} value={this.state.city} />
                    </Form.Group>

                    <Form.Group controlId="formBasicImg">
                        <Form.Label column sm={2}>
                            Profile photo link
                        </Form.Label>
                        <Form.Control type="txt" placeholder="Profile photo link" onChange={(e) => this.setState({ img: e.target.value })} value={this.state.img} />
                    </Form.Group>

                    <p>*Required fields</p>

                    <Form.Group>
                        <Button onClick={this.createUser} variant="success" block type="button">Sign up!</Button>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}

export default Signup;