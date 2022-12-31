/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiMartini } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { Nav, MenuToggler } from './styled/Nav.styled';

const shownStyle = { marginRight: '0', animation: 'menuInAnimation .4s ease' };
const hiddenStyle = { animation: 'menuOutAnimation .4s ease' };

const Menu = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);

  return (
    <Nav>
      <MenuToggler
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="menu"
        aria-controls="primary-navigation">
        <GiMartini />
      </MenuToggler>
      {showMenu &&
      <ul
        style={showMenu ? shownStyle : hiddenStyle}
        id="primary-navigation">
        <li>
          <NavLink onClick={() => setShowMenu(false)} to="/">List</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setShowMenu(false)} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={() => setShowMenu(false)} to="/login">Admin</NavLink>
        </li>
        {accessToken &&
        <li>
          <NavLink to="/" onClick={() => dispatch(user.actions.setAccessToken(null))}>Log out</NavLink>
        </li>}
      </ul>}
    </Nav>
  );
};
export default Menu;
