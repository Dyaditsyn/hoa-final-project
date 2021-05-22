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
            currentlyOpenCard: null
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

    saveModalInfo = ({title, details, priority, img}) => {
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

    deleteMessage = idToDelete => {
        const nextMessages = this.state.messages.filter(m => m.messageId !== idToDelete);
        localStorage.setItem('localMessages', JSON.stringify(nextMessages));
        this.setState({messages: nextMessages}, this.updateShownMessages)
    }

    render() {
        if (!this.props.activeUser) {
            return window.location.href = "/#/login";
        }
        return (
            <div className="p-messages">
                <MessageSearch onSearchParamsUpdate={this.updateSearchParameters} />
                {this.props.activeUser.role === 'committee' &&
                    <div className="text-right "><Button variant="link" className="font-weight-bold" onClick={() => { this.setState({ isModalOpen: true }) }}>New Message</Button></div>
                }
                <Accordion onSelect={cardId => this.setState({currentlyOpenCard: cardId})} className="mt-2">
                    {this.state.filteredMessages.map(message =>
                        <Card border="secondary" key={message.messageId}>
                            <Card.Header className={clsx({'open-header': this.state.currentlyOpenCard === message.messageId}, 'd-flex justify-content-between')}>
                                <Accordion.Toggle as={Button} variant="link" eventKey={message.messageId}>
                                    {message.title}
                                </Accordion.Toggle>
                                { <img className="priority-icon" src={message.priority === 'info' ? infoIcon : importantIcon}/>}
                            </Card.Header>
                            <Accordion.Collapse eventKey={message.messageId}>
                                <Card.Body>{message.details}
                                    <div className="d-flex justify-content-end">
                                        {this.props.activeUser.role === 'committee' &&
                                            <Button onClick={this.updateMessage} className="mr-2" variant="secondary">Update</Button>
                                        }
                                        {this.props.activeUser.role === 'committee' &&
                                            <Button onClick={() => this.deleteMessage(message.messageId)} className="mr-2" variant="danger">Delete</Button>
                                        }
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>)}
                </Accordion>

                <AddMessageModal isModalOpen={this.state.isModalOpen} handleClose={this.handleClose} onSave={this.saveModalInfo}/>
            </div>
        )
    }
}

export default Messages;