import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
// pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import FruitSelectPage from '../FruitSelectPage/FruitSelectPage';
import VarietySelectPage from '../VarietySelectPage/VarietySelectPage';
import SizeSelectPage from '../SizeSelectPage/SizeSelectPage';
import PalletListPage from '../PalletListPage/PalletListPage';
import AddPalletPage from '../AddPalletPage/AddPalletPage';
// components
import NavBar from '../../components/NavBar/NavBar';
// utils
import userService from '../../utils/userService';
import palletService from '../../utils/palletService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      pallets: [],
    };
  }

  getDistinctSpecies = () => {
    return Array.from(new Set(this.state.pallets.map(pallet => pallet.species)));
  }

  getDistinctVarieties = (species) => {
    return Array.from(new Set(this.state.pallets.filter(pallet => pallet.species === species).map(pallet => pallet.variety)));
  }

  getDistinctSizes = (species, variety) => {
    return Array.from(new Set(this.state.pallets.filter(pallet => pallet.species === species && pallet.variety === variety).map(pallet => pallet.size)));
  }

  getSomePallets = (species, variety, size) => {
    return this.state.pallets.filter(pallet => pallet.species === species && pallet.variety === variety && pallet.size === size);
  }

  addNewPalletToState = (pallet) => {
    this.setState({pallets: [...this.state.pallets, pallet]});
  }

  /*--- Handler Callbacks ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const pallets = await palletService.getAll();
    this.setState({ pallets });
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

          <Route exact path='/add' render={() =>
            userService.getUser() ?
              <AddPalletPage
                addNewPalletToState={this.addNewPalletToState}
              />
              :
              <Redirect to='/login' />
          } />

          <Route exact path='/' render={() =>
            userService.getUser() ?
              <FruitSelectPage
                species={this.getDistinctSpecies()}
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/:fruit' render={(props) =>
            userService.getUser() ?
              <VarietySelectPage
                varieties={this.getDistinctVarieties(props.match.params.fruit)}
                species={props.match.params.fruit}
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/:fruit/:var' render={(props) =>
            userService.getUser() ?
              <SizeSelectPage
                sizes={this.getDistinctSizes(props.match.params.fruit, props.match.params.var)}
                species={props.match.params.fruit}
                variety={props.match.params.var}
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/:fruit/:var/:size' render={(props) =>
            userService.getUser() ?
              <PalletListPage
                pallets={this.getSomePallets(props.match.params.fruit, props.match.params.var, props.match.params.size)}
                species={props.match.params.fruit}
                variety={props.match.params.var}
                size={props.match.params.size}
              />
              :
              <Redirect to='/login' />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
