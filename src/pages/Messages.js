import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import MessageSearch from '../components/MessageSearch';
import messagesJSON from '../data/messages.json';
import { v4 } from 'uuid';
import './messages.css'
import AddMessageModal from '../components/AddMessageModal';
import clsx from 'clsx';
import infoIcon from '../img/info-icon.png';
import importantIcon from '../img/important-icon.jpg';
import UpdateMessageModal from '../components/UpdateMessageModal';

const priority_values = { info: 1, important: 2 }

class Messages extends React.Component {
    constructor(props) {
        super(props);
        const localMessages = JSON.parse(localStorage.getItem('localMessages')) || messagesJSON;

        this.state = {
            messages: localMessages,
            filteredMessages: localMessages,
            searchParameters: {
                searchQuery: '',
                priorityFilter: '',
                sortBy: 'date'
            },
            isModalOpen: false,
            currentlyOpenCard: null,
            messageToUpdate: null
        }
    }


    getFilteredMessages = () => {
        let { messages, searchParameters } = this.state;

        if (searchParameters.searchQuery) {
            messages = messages.filter(m => m.title.includes(searchParameters.searchQuery) || m.details.includes(searchParameters.searchQuery));
        }

        if (searchParameters.priorityFilter) {
            messages = messages.filter(m => m.priority === searchParameters.priorityFilter);
        }

        if (searchParameters.sortBy === 'date') {
            messages = messages.sort((m1, m2) => new Date(m1.date) - new Date(m2.date));
        } else {
            messages = messages.sort((m1, m2) => priority_values[m2.priority] - priority_values[m1.priority]);
        }

        return messages;
    }

    updateSearchParameters = params => {
        this.setState({ searchParameters: params }, this.updateShownMessages);
    }

    updateShownMessages = () => {
        this.setState({ filteredMessages: this.getFilteredMessages() })
    }

    handleClose = () => {
        this.setState(
            {
                isModalOpen: false
            });
    }

    setMessageToUpdate = message => this.setState({ messageToUpdate: message });

    saveModalInfo = ({ title, details, priority, img }) => {
        const newMessage = {
            title,
            details,
            priority,
            img,
            userId: this.props.activeUser.id,
            date: (new Date()).toJSON(),
            messageId: v4()
        }
        localStorage.setItem('localMessages', JSON.stringify([...this.state.messages, newMessage]));
        this.setState(prevState => ({ messages: [...prevState.messages, newMessage] }), this.updateShownMessages)
        this.handleClose();
    }

    updateMessage = updatedMessage => {
       const {messages} = this.state;
       const messageIndex = messages.findIndex(m => m.messageId === updatedMessage.messageId);
       messages[messageIndex] = {...messages[messageIndex],...updatedMessage};
       localStorage.setItem('localMessages', JSON.stringify(messages));
        this.setState({messages: [...messages]}, this.updateShownMessages)
       
    }

    deleteMessage = idToDelete => {
        const nextMessages = this.state.messages.filter(m => m.messageId !== idToDelete);
        localStorage.setItem('localMessages', JSON.stringify(nextMessages));
        this.setState({ messages: nextMessages }, this.updateShownMessages)
    }

    render() {
        if (!this.props.activeUser) {
            return window.location.href = "#/login";
        }
        return (
            <div className="p-messages">
                <MessageSearch onSearchParamsUpdate={this.updateSearchParameters} />
                {this.props.activeUser.role === 'committee' &&
                    <div className="text-right ">
                        <Button variant="link" className="font-weight-bold" onClick={() => { this.setState({ isModalOpen: true }) }}>New Message</Button>
                    </div>
                }
                <Accordion onSelect={cardId => this.setState({ currentlyOpenCard: cardId })} className="mt-2">
                    {this.state.filteredMessages.map(message =>


                        <Card border="secondary" key={message.messageId}>
                            <Accordion.Toggle as={Card.Header} variant="link" eventKey={message.messageId}
                                className={clsx({ 'open-header': this.state.currentlyOpenCard === message.messageId }, "d-flex justify-content-between message-header")}>
                                {message.title}
                                {<img className="priority-icon"
                                    src={message.priority === 'info' ? infoIcon : importantIcon}
                                    alt={message.priority === 'info' ? "info-icon" : "important icon"} />}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={message.messageId}>
                                <Card.Body>
                                    <section className="d-flex">
                                        <div>
                                            <div className="d-flex mb-4"><p className="font-weight-bold mr-3">Details: </p>{message.details}</div>
                                            <div className="d-flex mb-4"><p className="font-weight-bold mr-3">Priority: </p>{message.priority}</div>
                                            <img className="message-img" src={message.img} />
                                        </div>
                                            
                                    
                                    </section>

                                    <div className="d-flex justify-content-end">
                                        {this.props.activeUser.role === 'committee' &&
                                            <Button onClick={() => this.setMessageToUpdate(message)} className="mr-2" variant="secondary">Update</Button>
                                        }
                                        {this.props.activeUser.role === 'committee' &&
                                            <Button onClick={() => this.deleteMessage(message.messageId)} className="mr-2" variant="danger">Delete</Button>
                                        }
                                    </div>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>)}
                </Accordion>
                {this.state.messageToUpdate && <UpdateMessageModal onUpdate={this.updateMessage} messageToUpdate={this.state.messageToUpdate} onCancel={() => this.setMessageToUpdate(null)} /> }
                <AddMessageModal isModalOpen={this.state.isModalOpen} handleClose={this.handleClose} onSave={this.saveModalInfo} />
            </div>
        )
    }
}

export default Messages;