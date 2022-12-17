/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './styled/Nav.styled';
import { MenuBtn } from './styled/Buttons.styled';

const mountedStyle = { marginRight: '0', animation: 'menuInAnimation .5s' };
const unmountedStyle = { animation: 'menuOutAnimation .5s' };

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Nav>
      <MenuBtn
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="menu"
        aria-controls="primary-navigation"
        aria-expanded="false">
        <div />
      </MenuBtn>
      <ul
        style={showMenu ? mountedStyle : unmountedStyle}
        id="primary-navigation">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default Menu;
