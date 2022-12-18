/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiMartini } from 'react-icons/gi';
import Nav from './styled/Nav.styled';
import { MenuBtn } from './styled/Buttons.styled';

const shownStyle = { marginRight: '0', animation: 'menuInAnimation .4s ease' };
const hiddenStyle = { animation: 'menuOutAnimation .4s ease' };

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
        <GiMartini />
      </MenuBtn>
      <ul
        style={showMenu ? shownStyle : hiddenStyle}
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
