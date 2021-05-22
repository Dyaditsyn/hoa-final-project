import React, { Component } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

export default class AddMessageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            details: '',
            priority: '',
            img: ''
        }
    }

    clearFields = () =>  this.setState({
        title: '',
        details: '',
        priority: '',
        img: ''
    });

    closeModal = () => {
        this.clearFields();
        this.props.handleClose();
    }

    saveDetails = () => {
        this.props.onSave(this.state);
        this.clearFields();
    }


    render() {
        return (
            <Modal show={this.props.isModalOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Title:
                    </Form.Label>
                            <Col sm={10} className="mb-2">
                                <Form.Control required
                                    type="text"
                                    placeholder="Message Title"
                                    value={this.state.title}
                                    onChange={(event) => { this.setState({ title: event.target.value }) }} />
                            </Col>

                            <Form.Label column sm={2}>
                                Details:
                    </Form.Label>
                            <Col sm={10} className="mb-2">
                                <Form.Control required
                                    type="text"
                                    placeholder="Message Details"
                                    value={this.state.details}
                                    onChange={(event) => { this.setState({ details: event.target.value }) }} />
                            </Col>

                            <Form.Label column sm={2}>
                                Priority:
                    </Form.Label>
                            <Col sm={10} className="mb-5">
                                <Form.Control required
                                    value={this.state.priority}
                                    onChange={(event) => { this.setState({ priority: event.target.value }) }}
                                    as="select">
                                    <option>Priority</option>
                                    <option value="info">Information</option>
                                    <option value="important">Important</option>
                                </Form.Control>
                            </Col>

                            <Form.Label column sm={2}>
                                Image:
                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Image URL"
                                    value={this.state.img}
                                    onChange={(event) => { this.setState({ img: event.target.value }) }} />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                </Button>
                    <Button variant="primary" onClick={this.saveDetails}>
                        Create
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
