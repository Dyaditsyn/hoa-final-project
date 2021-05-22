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
            // <div className="d-flex">
            //     {/* <button onClick={() => alert(this.state.priorityFilter)} /> */}
            //     <input value={this.state.searchQuery} onChange={this.updateSearchQuery} type="text" />

            //     <select value={this.state.priorityFilter} onChange={this.updatePriorityFilter}>
            //         <option value="">Filter by priority</option>
            //         <option value="info">Information</option>
            //         <option value="important">Important</option>
            //     </select>

            //     <span>Sort by:</span>
            //     {['date', 'priority'].map(option => (<div key={option}>
            //         <input type="radio" onChange={this.updateSortBy} checked={this.state.sortBy === option} value={option} />
            //         <span className="text-capitalize">{option}</span>
            //     </div>))}

            // </div>
            <Row className="mb-5">
                <Col md={12} lg={7}>
                    <Form inline className="my-2">
                        <FormControl 
                        value={this.state.searchQuery} 
                        onChange={this.updateSearchQuery} 
                        className=".search-input" 
                        type="text" 
                        placeholder="Filter by Text in Title and Details" 
                        />
                        <Button className="search-btn m-2" >Search</Button>
                    </Form>
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