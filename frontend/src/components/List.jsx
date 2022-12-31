/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UL, LI } from './styled/List.styled';
import { CatP, NameP } from './styled/Misc.styled';

const List = () => {
  const cocktailList = useSelector((store) => store.list.cocktailList);

  return (
    <UL>
      {typeof cocktailList === 'string' ? (
        <Link to="/">
          <LI>
            <NameP>{cocktailList}</NameP>
          </LI>
        </Link>
      ) : (
        cocktailList.map((item) => {
          return (
            <Link key={item._id} to={`/cocktails/${item._id}`}>
              <LI>
                <NameP>{item.cocktailName}</NameP>
                <CatP>{item.category.replaceAll('-', ' ')}</CatP>
              </LI>
            </Link>
          );
        })
      )}
    </UL>
  );
};

export default List;
