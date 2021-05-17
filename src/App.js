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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // activeUser: null
      activeUser: {
        id:  1,
        name: 'Admin',
        email: 'admin@hoa.com',
        pwd: '123',
        // building: 'A',
        // adress: 'My st., 1',
        // city: 'My city',
        // tel: '0123456789'
      }
    }
  }
  logout = () => {
    this.setState({
      activeUser: null,
    });
  }

  render() {
  return (
    <Container>
      <HashRouter>
        <Route exact path={[ "/", "/dashboard", "/issues", "/messages", "/tenants", "/voting" ]}>
          <HoaNavbar 
            activeUser={this.state.activeUser}
            logout={this.logout}
            />
        </Route>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/login">
            <Login></Login>
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
      </HashRouter>
    </Container>
    );
  }
}

export default App;
