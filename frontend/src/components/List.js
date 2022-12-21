/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';

const List = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [singleCocktail, setSingleCocktail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.body))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, []);

  console.log(loading)
  console.log(singleCocktail)

  const handleSingleCocktailClick = (id) => {
    getCocktails(`cocktails/${id}`)
      .then((data) => setSingleCocktail(data.response))
      .catch((e) => console.error(e))
  };

  return (
    <div>
      <div>
        {cocktailList && cocktailList.map((item) => {
          return (
            <div>
              <h4>{item.cocktailName}</h4>
              <button type="button" onClick={handleSingleCocktailClick(item._id)}>HEJ</button>
              <p>{item._id}</p>
            </div>
          )
        })}
      </div>
      <div>
        {singleCocktail && singleCocktail.map((cocktail) => {
          return <h1>{cocktail.ingredients}</h1>
        })}
      </div>
    </div>
  )
};

export default List;
