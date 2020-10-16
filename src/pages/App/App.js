import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import FruitSelectPage from '../FruitSelectPage/FruitSelectPage';
import VarietySelectPage from '../VarietySelectPage/VarietySelectPage';
import SizeSelectPage from '../SizeSelectPage/SizeSelectPage';
import PalletListPage from '../PalletListPage/PalletListPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
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

          {/* TODO: add pallet route */}
          <Route exact path='/add' render={() =>
            userService.getUser() ?
              <div>add</div>
              :
              <Redirect to='/login' />
          } />

          <Route exact path='/' render={() =>
            userService.getUser() ?
              <FruitSelectPage />
              :
              <Redirect to='/login' />
          } />
          <Route path='/:fruit' render={() =>
            userService.getUser() ?
              <VarietySelectPage />
              :
              <Redirect to='/login' />
          } />
          <Route path='/:fruit/:var' render={() =>
            userService.getUser() ?
              <SizeSelectPage />
              :
              <Redirect to='/login' />
          } />
          <Route path='/:fruit/:var/:size' render={() =>
            userService.getUser() ?
              <PalletListPage />
              :
              <Redirect to='/login' />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
