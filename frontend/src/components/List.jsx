/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { Link } from 'react-router-dom';
import { ListItemBtn } from './styled/Buttons.styled';
// import { ListItem } from './styled/ListItem.styled';

const List = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, []);

  // fix loading animation
  console.log(loading)

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
