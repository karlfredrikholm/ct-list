/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { UL, LI } from './styled/elements/List.styled';
import { H3, H4 } from './styled/elements/Headings.styled';

const List = ({ cocktailList }) => {
  return (
    <UL>
      {typeof cocktailList === 'string' ? (
        <Link to="/">
          <LI>
            <h4>{cocktailList}</h4>
          </LI>
        </Link>
      ) : (
        cocktailList.map((item) => {
          return (
            <Link key={item._id} to={`/cocktails/${item._id}`}>
              <LI>
                <H3>{item.cocktailName}</H3>
                <H4 italic>{item.category.replaceAll('-', ' ')}</H4>
              </LI>
            </Link>
          );
        })
      )}
    </UL>
  );
};

export default List;
