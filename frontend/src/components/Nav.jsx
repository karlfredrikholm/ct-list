/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiMartini } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import user from 'reducers/user';
import { Nav, MenuToggler } from './styled/Nav.styled';

const shownStyle = { marginRight: '0', animation: 'menuInAnimation .4s ease' };

const Menu = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const accessToken = useSelector((store) => store.user.accessToken);

  return (
    <Nav>
      <MenuToggler
        className={showMenu && 'expanded'}
        type="button"
        onClick={() => setShowMenu(!showMenu)}>
        <GiMartini />
      </MenuToggler>
      {showMenu &&
      <ul
        style={showMenu && shownStyle}
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
          <NavLink to="/add" onClick={() => dispatch(user.actions.setAccessToken(null))}>Log out</NavLink>
        </li>}
      </ul>}
    </Nav>
  );
};
export default Menu;
