import React from 'react';

class Issues extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "/#/login"
        }
        return (
            <div className="p-issues">
                I am Issues
            </div>
        )
    }
}

export default Issues;