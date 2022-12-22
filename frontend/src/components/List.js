/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
// import { useNavigate } from 'react-router-dom';
import { Accordion } from './styled/Accordion.styled';
// import SingleCocktail from './SingleCocktail';

const List = () => {
  // const navigate = useNavigate();
  const [cocktailList, setCocktailList] = useState([]);
  // const [showInfo, setShowInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const [singleRecipe, setSingleRecipe] = useState('');

  useEffect(() => {
    setLoading(true)
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, []);

  // fix loading animation
  console.log(loading)

  // const handleShowSingleCocktail = (singleCocktail) => {
  //   const cocktailToShow = cocktailList.map((item) => {
  //     if (item._id === singleCocktail._id) {
  //       return singleCocktail
  //     } else return false
  //   })
  //   setSingleRecipe(cocktailToShow);
  //   console.log(cocktailToShow)
  // };

  const handleSingleCocktailClick = (id) => {
    getCocktails(`cocktails/${id}`)
      .then((data) => {
        if (singleRecipe) {
          setSingleRecipe('')
        } else {
          setSingleRecipe(data.response)
        }
      })
      .catch((e) => console.error(e))
  };

  return (
    <div>
      {cocktailList && cocktailList.map((item) => {
        return (
          <Accordion>
            <h4>{item.cocktailName}</h4>
            <button type="button" onClick={() => handleSingleCocktailClick(item._id)}>HEJ</button>
            <p>{item.category}</p>
          </Accordion>
        )
      })}
      {singleRecipe &&
          <div>
            <h3>Ingredients</h3>
            <p>{singleRecipe.ingredients}</p>
            <h3>Method</h3>
            <p>{singleRecipe.preparation}</p>
            <h3>Garnish</h3>
            <p>{singleRecipe.garnish}</p>
            <a href={singleRecipe.imageSearchLink} target="_blank" rel="noreferrer"><h3>Images for inspiration (opens in a new window)</h3></a>
            {singleRecipe.notes &&
            <>
              <h3>Notes</h3>
              <p>{singleRecipe.notes}</p>
            </>}
          </div>}
    </div>
  )
};

export default List;
