import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  
  handleSignupOrLogin = () => {

  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/" exact>&nbsp;Home&nbsp;</NavLink>
          <NavLink to="/signup" exact>&nbsp;Sign Up&nbsp;</NavLink>
          <NavLink to="/login" exact>&nbsp;Log In&nbsp;</NavLink>
        </nav>
        <h1>placeholder text</h1>
        <Switch>
          <Route exact path='/' render={() =>
            <p>root</p>
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
