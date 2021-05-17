import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Sigup';
import Dashboard from './pages/Dashboard';
import Issues from './pages/Issues';
import Messages from './pages/Messages';
import Tenants from './pages/Tenants';
import Voting from './pages/Voting';
import HoaNavbar from './components/HoaNavbar';
import { Container } from 'react-bootstrap';
import userJSON from './data/users.json'

class App extends React.Component {
  constructor(props){
    super(props);
    let usersData = [];
    if (localStorage['allUsers']) {usersData = localStorage['allUsers'];}
    else {usersData = userJSON}
    this.state = {
      activeUser: null,
      allUsers: userJSON,
      // activeUser: {
      //   id:  1,
      //   name: 'Admin',
      //   email: 'admin@hoa.com',
      //   pwd: '123',
      //   building: 'A',
      //   adress: 'My st., 1',
      //   city: 'My city',
      //   tel: '0123456789'
      // }
    }
  }
  signup = (newUser) => {
    this.setState({
      activeUser: newUser,
      allUsers: this.state.allUsers.concat(newUser)
    });
    localStorage['allUsers'] = localStorage['allUsers'].push(newUser);
  }

  login = (userObj) => {
    this.setState({
      activeUser: userObj,
    })
  }

  handleLogout = () => {
    this.setState({
      activeUser: null,
    });
  }

  render() {
  return (
      <HashRouter>
        <Route exact path={[ "/", "/dashboard", "/issues", "/messages", "/tenants", "/voting" ]}>
          <HoaNavbar 
            activeUser={this.state.activeUser}
            handleLogout={this.handleLogout}
            ></HoaNavbar>
        </Route>
        <Container>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/login">
            <Login 
              allUsers={this.state.allUsers}
              login={this.login} />
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard activeUser={this.state.activeUser}></Dashboard>
          </Route>
          <Route exact path="/issues">
            <Issues activeUser={this.state.activeUser}></Issues>
          </Route>
          <Route exact path="/messages">
            <Messages activeUser={this.state.activeUser}></Messages>
          </Route>
          <Route exact path="/tenants">
            <Tenants activeUser={this.state.activeUser}></Tenants>
          </Route>
          <Route exact path="/voting">
            <Voting activeUser={this.state.activeUser}></Voting>
          </Route>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
