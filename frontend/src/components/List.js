/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
// import { useNavigate } from 'react-router-dom';
import { ListItemBtn } from './styled/Buttons.styled';
// import { ListItem } from './styled/ListItem.styled';

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
          <ListItemBtn type="button" onClick={() => handleSingleCocktailClick(item._id)}>
            <h4>{item.cocktailName}</h4>
            <p>{item.category}</p>
          </ListItemBtn>
        )
      })}
    </div>
  )
};

export default List;
