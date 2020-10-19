import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => (
  <nav>
    {
      props.user ?
        <>
          <NavLink to="/" exact>&nbsp;View Inventory&nbsp;</NavLink>
          <NavLink to="/add" exact>&nbsp;Add Pallet&nbsp;</NavLink>
          <Link to='' onClick={props.handleLogout}>&nbsp;Log Out&nbsp;</Link>
          <span>&nbsp;Welcome {props.user.name}&nbsp;</span>
        </>
        :
        <>
          <NavLink to="/signup" exact>&nbsp;Sign Up&nbsp;</NavLink>
          <NavLink to="/login" exact>&nbsp;Log In&nbsp;</NavLink>
        </>
    }
  </nav>
);

export default NavBar;
