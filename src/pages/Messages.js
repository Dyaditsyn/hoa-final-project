import React from 'react';
import { Accordion, Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MessageSearch from '../components/MessageSearch';
import messagesJSON from '../data/messages.json';
import './messages.css'

const priority_values = { info: 1, important: 2 }

class Messages extends React.Component {
    constructor(props) {
        super(props)
        const localMessages = JSON.parse(localStorage.getItem('localMessages')) || messagesJSON

        this.state = {
            messages: localMessages,
            filteredMessages: localMessages,
            searchParameters: {
                searchQuery: '',
                priorityFilter: '',
                sortBy: 'date'
            }
        }
    }

    // TODO: Make the component react to changes in searchParameters, i.e. change filteredMessages every time searchParameters changes
    // this.setState({filteredMessages: this.getFilteredMessages()}) <--- Do this eventually, figure out when to do this

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
        this.setState({ searchParameters: params });
        this.updateShownMessages();
    }

    updateShownMessages = () => {
        this.setState({ filteredMessages: this.getFilteredMessages() })
    }

    render() {
        if (!this.props.activeUser) {
            window.location.href = "/#/login"
        }
        console.log(this.state.filteredMessages);
        return (
            <div className="p-messages">
                <MessageSearch onSearchParamsUpdate={this.updateSearchParameters} />
                {this.props.activeUser.role === 'committee' ? 
                <div className="text-right font-weight-bold "><Link onClick={this.addMessage} to="#">New Message</Link></div> 
                : null}
                <Accordion className="mt-2">
                {this.state.filteredMessages.map(message =>
                    <Card border="secondary" key={message.messageId}> 
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={message.messageId}>
                            {message.title} {message.date} {message.priority} 
                            {message.priority === 'info' ? <div className="info-logo"></div> : <div className="important-logo"></div>}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={message.messageId}>
                            <Card.Body>{message.details} 
                            <div className="d-flex justify-content-end">
                                {this.props.activeUser.role === 'committee' ? <Button className="mr-2" variant="secondary">Update</Button> : null}
                                {this.props.activeUser.role === 'committee' ? <Button className="mr-2" variant="danger">Delete</Button> : null}
                            </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>)}
                </Accordion>

            </div>
        )
    }
}

export default Messages;