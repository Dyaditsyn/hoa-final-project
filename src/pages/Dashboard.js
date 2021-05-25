import React from 'react';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "#/login"
        }
        return (
            <div className="p-dashboard">
                I am Dashboard
            </div>
        )
    }
}

export default Dashboard;