import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Issues from './pages/Issues';
import Messages from './pages/Messages';
import Tenants from './pages/Tenants';
import Voting from './pages/Voting';
import HoaNavbar from './components/HoaNavbar';
import { Container } from 'react-bootstrap';
import userJSON from './data/users.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    let usersData = JSON.parse(localStorage.getItem('localUsers')) || userJSON;
   

    this.state = {
      activeUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
      allUsers: usersData
    }
  }

  addUser = (newUser) => {
    const localUsersString = JSON.stringify(this.state.allUsers.concat(newUser));
    localStorage.setItem('localUsers', localUsersString);
    this.setState({
      activeUser: newUser,
      allUsers: this.state.allUsers.concat(newUser)
    });
  }

  login = (userObj) => {
    this.setState({
      activeUser: userObj,
    })
    localStorage.setItem('loggedInUser', JSON.stringify(userObj));

  }

  handleLogout = () => {
    this.setState({
      activeUser: null,
    }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(null));
      window.location.href = '#/';
    });

  }

  render() {
    return (
      <HashRouter basename="/hoa-final-project">
        <Route exact path={["/", "/dashboard", "/issues", "/messages", "/tenants", "/voting"]}>
          <HoaNavbar
            activeUser={this.state.activeUser}
            handleLogout={this.handleLogout}
          />
        </Route>
        <Container>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login
              allUsers={this.state.allUsers}
              login={this.login} />
          </Route>
          <Route exact path="/signup">
            <Signup addUser={this.addUser} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard activeUser={this.state.activeUser} />
          </Route>
          <Route exact path="/issues">
            <Issues activeUser={this.state.activeUser} />
          </Route>
          <Route exact path="/messages">
            <Messages
              activeUser={this.state.activeUser} />
          </Route>
          <Route exact path="/tenants">
            <Tenants
              activeUser={this.state.activeUser}
              allUsers={this.state.allUsers} />
          </Route>
          <Route exact path="/voting">
            <Voting activeUser={this.state.activeUser} />
          </Route>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
