import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/profile"> Profile </NavLink>
      <NavLink to="/users"> Users </NavLink>
    </nav>
  );
};

// if we the links without the Link component from the RRD library then the whole page refreshes, but with this, the navbar(links) do not refresh
// NavLink adds active class to the selected link and then we can add css for the active class to separate it from others

export default NavBar;
