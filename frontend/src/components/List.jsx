/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemBtn } from './styled/Buttons.styled';

const List = ({ cocktailList }) => {
  return (
    <div>
      {typeof cocktailList === 'string' ? (
        <Link to="/">
          <ListItemBtn>
            <h4>{cocktailList}</h4>
          </ListItemBtn>
        </Link>
      ) : (
        cocktailList.map((item) => {
          return (
            <Link key={item._id} to={`/cocktails/${item._id}`}>
              <ListItemBtn>
                <h4>{item.cocktailName}</h4>
                <h5>{item.category.replaceAll('-', ' ')}</h5>
              </ListItemBtn>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default List;
