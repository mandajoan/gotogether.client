import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import auth from './auth'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import Event from './components/Event'
import AccountSettings from './components/AccountSettings'



class App extends Component {
  state = {
  currentUser: auth.getCurrentUser()
}

setCurrentUser() {
  this.setState({
    currentUser: auth.getCurrentUser()
  })
}

logOut() {
  auth.clearToken()
  this.setState({currentUser: null})
}

render() {
  const currentUser = this.state.currentUser
  return (
    <Router>
      <div className="App">
        
        <div>
          <NavBar currentUser={currentUser} />
        </div>

        <Route exact path='/' render={() => (
            <Home currentUser={currentUser} />
          )} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' render={() => (
          <LogIn onLogIn={this.setCurrentUser.bind(this)} />
        )} />
        <Route path='/logout' render={() => (
          <LogOut onLogOut={this.logOut.bind(this)} />
            )} />

          <Route path='/users/:id' render={() => (
            currentUser
            ? <AccountSettings onDeleteUser={this.logOut.bind(this)} onUpdateUser={this.setCurrentUser.bind(this)} currentUser={currentUser} />
            : <Redirect to='/login' />
          )} />



      </div>
    </Router>
  );
}
}

export default App;
