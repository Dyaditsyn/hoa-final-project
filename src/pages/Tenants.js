import React from 'react';

class Tenants extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        if(!this.props.activeUser){
            window.location.href = "#/login"
        }
        return (
            <div className="p-tenants">
                I am Tenants
            </div>
        )
    }
}

export default Tenants;