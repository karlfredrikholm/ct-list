/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cocktail from 'reducers/cocktail';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/utils';
import { FilledBtn } from './styled/Buttons.styled';
import { AddForm } from './styled/Forms';
import { Input } from './styled/elements/Input';
import { Label } from './styled/elements/Label';
import { H5, H6 } from './styled/elements/Headings.styled';

const AddCocktail = () => {
  const cocktailState = useSelector((store) => store.cocktail);
  const accessToken = useSelector((store) => store.user.accessToken);
  // const userName = useSelector((store) => store.user.username);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify(cocktailState)
    };

    fetch(`${BASE_URL}/add`, options)
      .then((res) => res.json())
      .then((data) => setMessage(data.response))
      .catch((e) => console.error(e))
      .finally(() => dispatch(cocktail.actions.cleanup()))
  };

  return (
    <AddForm onSubmit={handleFormSubmit}>
      <H5>Add New Cocktail</H5>

      <Label htmlFor="cocktailName">Name
        <Input
          id="cocktailName"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setCocktailName(e.target.value))}
          value={cocktailState.cocktailName}
          placeholder='E.g. "Dry Martini"'
          required />
      </Label>

      <Label htmlFor="category">Category
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
      </Label>

      <Label htmlFor="ingredients">Ingredients
        <textarea
          id="ingredients"
          onChange={(e) => dispatch(cocktail.actions.setIngredients(e.target.value))}
          value={cocktailState.ingredients}
          placeholder="E.g. 3 cl Gin, 3 Campari, 3 cl sweet vermouth"
          required />
      </Label>

      <Label htmlFor="garnish">Garnish
        <Input
          id="garnish"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setGarnish(e.target.value))}
          value={cocktailState.garnish}
          placeholder="If no garnish, leave input field blank" />
      </Label>

      <Label htmlFor="preparation">Preparation
        <textarea
          id="preparation"
          onChange={(e) => dispatch(cocktail.actions.setPreparation(e.target.value))}
          value={cocktailState.preparation}
          placeholder="How to make the cocktail"
          required />
      </Label>
      <Label htmlFor="image">Google Image Search Link
        <Input
          id="imagesLink"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setImageSearchLink(e.target.value))}
          value={cocktailState.imageSearchLink}
          placeholder="URL for Google image search results"
          required />
      </Label>
      <Label htmlFor="notes">Notes
        <Input
          id="notes"
          type="text"
          onChange={(e) => dispatch(cocktail.actions.setNotes(e.target.value))}
          value={cocktailState.notes}
          placeholder="Any extra notes?" />
      </Label>
      <FilledBtn type="submit">Submit</FilledBtn>
      {message && <H6>{message}</H6>}
    </AddForm>
  );
};

export default AddCocktail;
