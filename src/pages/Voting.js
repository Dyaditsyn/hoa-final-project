import React from 'react';

class Voting extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "#/login"
        }
        return (
            <div className="p-voting">
                I am Voting
            </div>
        )
    }
}

export default Voting;