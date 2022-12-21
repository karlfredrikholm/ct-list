/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import { Accordion } from './styled/Accordion.styled';

const List = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [singleCocktail, setSingleCocktail] = useState([]);

  useEffect(() => {
    setLoading(true)
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, []);

  // fix loading animation
  console.log(loading)

  // const handleSingleCocktailClick = (id) => {
  //   getCocktails(`cocktails/${id}`)
  //     .then((data) => setSingleCocktail(data.response))
  //     .catch((e) => console.error(e))
  // };

  return (
    <div>
      {cocktailList && cocktailList.map((item) => {
        return (
          <>
            <Accordion>
              <h4>{item.cocktailName}</h4>
              <button type="button" onClick={() => setShowInfo(!showInfo)}>HEJ</button>
            </Accordion>
            {showInfo &&
            <div>
              <h3>Ingredients</h3>
              <p>{item.ingredients}</p>
              <h3>Method</h3>
              <p>{item.preparation}</p>
              <h3>Garnish</h3>
              <p>{item.garnish}</p>
              <a href={item.imageSearchLink} target="_blank" rel="noreferrer"><h3>Images for inspiration (opens in a new window)</h3></a>
              {item.notes &&
              <>
                <h3>Notes</h3>
                <p>{item.notes}</p>
              </>}
            </div>}
          </>
        )
      })}
    </div>
  )
};

export default List;
