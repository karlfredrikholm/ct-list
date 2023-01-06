/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { UL, LI } from './styled/List.styled';
import { CatP, NameP } from './styled/Misc.styled';
import Menu from './Nav';

const List = ({ cocktailList }) => {
  return (
    <>
      <Menu />
      <UL>
        {typeof cocktailList === 'string' ? (
          <LI>
            <NameP className="err">{cocktailList}</NameP>
          </LI>
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
    </>
  );
};

export default List;
