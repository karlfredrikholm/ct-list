/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { postCocktail } from 'utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cocktail from 'reducers/cocktail';
import { SubmitBtn } from './styled/Buttons.styled';
import { AddForm } from './styled/Forms';

const AddCocktail = () => {
  const cocktailState = useSelector((store) => store.cocktail);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userName = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/admin');
    }
  }, [accessToken, navigate]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postCocktail(cocktailState)
      .finally(() => dispatch(cocktail.actions.cleanup()));
  };

  return (
    <AddForm onSubmit={handleFormSubmit}>
      <div>
        <h2>Welcome {userName}</h2>
        <h3>Add New Cocktail</h3>

        <label htmlFor="cocktailName">Name</label>
        <input
          id="cocktailName"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setCocktailName(e.target.value))}
          value={cocktailState.cocktailName}
          placeholder='E.g. "Dry Martini"'
          required />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) => dispatch(cocktail.actions.setCategory(e.target.value))}
          value={cocktailState.category}
          required>
          <option value="" disabled>
            Choose IBA Category:
          </option>
          <option value="the-unforgettables">The Unforgettables</option>
          <option value="contemporary-classics">Contemporary Classics</option>
          <option value="new-era-drinks">New Era Drinks</option>
        </select>

        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          onChange={(e) => dispatch(cocktail.actions.setIngredients(e.target.value))}
          value={cocktailState.ingredients}
          placeholder="E.g. 3 cl Gin, 3 Campari, 3 cl sweet vermouth"
          required />

        <label htmlFor="garnish">Garnish</label>
        <input
          id="garnish"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setGarnish(e.target.value))}
          value={cocktailState.garnish}
          placeholder="If no garnish – leave input field blank" />

        <label htmlFor="preparation">Preparation</label>
        <textarea
          id="preparation"
          onChange={(e) => dispatch(cocktail.actions.setPreparation(e.target.value))}
          value={cocktailState.preparation}
          placeholder="How to make the cocktail"
          required />

        <label htmlFor="image">Google Image Search Link</label>
        <input
          id="imagesLink"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setImageSearchLink(e.target.value))}
          value={cocktailState.imageSearchLink}
          placeholder="URL for Google image search results"
          required />

        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setNotes(e.target.value))}
          value={cocktailState.notes}
          placeholder="Any extra notes?" />

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </div>
    </AddForm>
  );
};

export default AddCocktail;
