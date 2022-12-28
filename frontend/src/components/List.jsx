/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemBtn } from './styled/Buttons.styled';

const List = ({ cocktailList }) => {
  return (
    <div>
      {cocktailList && cocktailList.map((item) => {
        return (
          <Link key={item._id} to={`/cocktails/${item._id}`}>
            <ListItemBtn>
              <h4>{item.cocktailName}</h4>
              <h5>{item.category}</h5>
            </ListItemBtn>
          </Link>
        )
      })}
    </div>
  )
};

export default List;
