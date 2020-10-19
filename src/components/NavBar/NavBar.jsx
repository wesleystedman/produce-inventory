import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => (
  <nav>
    {
      props.user ?
        <>
          <NavLink to="/" exact>&nbsp;&nbsp;View Inventory&nbsp;&nbsp;</NavLink>
          <NavLink to="/add" exact>&nbsp;&nbsp;Add Pallet&nbsp;&nbsp;</NavLink>
          <Link to='' onClick={props.handleLogout}>&nbsp;&nbsp;Log Out&nbsp;&nbsp;</Link>
          <span>&nbsp;&nbsp;Welcome {props.user.name}&nbsp;&nbsp;</span>
        </>
        :
        <>
          <NavLink to="/signup" exact>&nbsp;&nbsp;Sign Up&nbsp;&nbsp;</NavLink>
          <NavLink to="/login" exact>&nbsp;&nbsp;Log In&nbsp;&nbsp;</NavLink>
        </>
    }
  </nav>
);

export default NavBar;
