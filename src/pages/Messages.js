import React from 'react';

class Messages extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "/#/login"
        }
        return (
            <div className="p-messages">
                I am Messages
            </div>
        )
    }
}

export default Messages;