import React from 'react'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import '../pages/messages.css'

class MessageSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            priorityFilter: '',
            sortBy: 'date'
        }
    }

    updateSearchQuery = (e) => {
        this.setState({ searchQuery: e.target.value }, () => this.props.onSearchParamsUpdate(this.state))
    }

    updatePriorityFilter = e => {
        this.setState({ priorityFilter: e.target.value }, () => this.props.onSearchParamsUpdate(this.state))
    }

    updateSortBy = e => {
        this.setState({ sortBy: e.target.value }, () => this.props.onSearchParamsUpdate(this.state))
    }


    render() {
        return (
            <Row className="mb-5 ml-2">
                <Col className="d-flex align-items-center" md={12} lg={7}>
                   
                        <FormControl
                        value={this.state.searchQuery} 
                        onChange={this.updateSearchQuery} 
                        className=".search-input" 
                        type="text" 
                        placeholder="Filter by Text in Title and Details" 
                        />
                        
                  
                    <Button className="search-btn m-2" >Search</Button>
                </Col>
                <Form inline className="my-2">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control 
                        value={this.state.priorityFilter} 
                        onChange={this.updatePriorityFilter} 
                        as="select">
                            <option value="">Filter by...</option>
                            <option value="info">Information</option>
                            <option value="important">Important</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form key={'inline-radio'} className="mt-3"> Sort by: 
                    <Form.Check onChange={this.updateSortBy} checked={this.state.sortBy === 'date'} className="ml-2"
                    inline label="Date" name="sortby" type='radio' value='date' />
                    <Form.Check onChange={this.updateSortBy} checked={this.state.sortBy === 'priority'} 
                    inline label="Priority" name="sortby" type='radio' value='priority' />
                </Form>
            </Row >
        )
    }
}

export default MessageSearch;