import React, { Component } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

export default class UpdateMessageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.messageToUpdate.title || '',
            details: props.messageToUpdate.details || '',
            priority: props.messageToUpdate.priority || '',
            img: props.messageToUpdate.img || ''
        }
    }

 

    closeModal = () => {
        this.props.onCancel();
    }

    saveDetails = () => {
        this.props.onUpdate({...this.state, messageId: this.props.messageToUpdate.messageId});
        this.closeModal();
    }


    render() {
        return (
            <Modal show={true} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Message</Modal.Title>
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
                                <Form.Control as="textarea" rows={3} required
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
                        Cancel
                </Button>
                    <Button variant="primary" onClick={this.saveDetails}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}