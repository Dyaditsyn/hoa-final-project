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

class App extends React.Component {

  render() {
  return (
    <HashRouter >
      <HoaNavbar></HoaNavbar>
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
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/issues">
          <Issues></Issues>
        </Route>
        <Route exact path="/messages">
          <Messages></Messages>
        </Route>
        <Route exact path="/tenants">
          <Tenants></Tenants>
        </Route>
        <Route exact path="/voting">
          <Voting></Voting>
        </Route>

    </HashRouter>
    );
  }
}

export default App;
