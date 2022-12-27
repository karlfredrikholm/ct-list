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
        aria-controls="primary-navigation">
        <GiMartini />
      </MenuBtn>
      <ul
        style={showMenu ? shownStyle : hiddenStyle}
        id="primary-navigation">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/signin">About</NavLink>
        </li>
        <li>
          <NavLink to="/about">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Admin</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default Menu;
