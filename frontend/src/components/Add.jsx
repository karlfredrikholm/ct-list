/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import cocktail from 'reducers/cocktail';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/utils';
import { FilledBtn } from './styled/Buttons.styled';
import { AddForm } from './styled/Forms.styled';
import { Input, Label } from './styled/Input.styled';
import { H2 } from './styled/Headings.styled';
import { AddWrapper } from './styled/Wrappers.styled';
import { HR, Mess, P } from './styled/Misc.styled';
import Menu from './Nav';

const AddCocktail = () => {
  const cocktailState = useSelector((store) => store.cocktail);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userName = useSelector((store) => store.user.username);
  const [response, setResponse] = useState('');
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
      .then((data) => setResponse(data.response))
      .catch((e) => console.error(e))
      .finally(() => dispatch(cocktail.actions.cleanup()))
  };

  return (
    <>
      <Menu />
      <AddWrapper>
        <P>Welcome {userName}.</P>
        <H2>Add New Cocktail</H2>
        <div>
          <HR />
        </div>
        <AddForm onSubmit={handleFormSubmit}>

          <Label htmlFor="cocktailName">Name
            <Input
              add
              id="cocktailName"
              type="text"
              onChange={(e) => dispatch(cocktail.actions.setCocktailName(e.target.value))}
              value={cocktailState.cocktailName}
              placeholder='E.g. "Negroni"'
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
              minLength="10"
              maxLength="150"
              onChange={(e) => dispatch(cocktail.actions.setIngredients(e.target.value))}
              value={cocktailState.ingredients}
              placeholder='E.g. "30 ml Gin, 30 ml Campari" etc.'
              required />
          </Label>

          <Label htmlFor="garnish">Garnish
            <Input
              add
              id="garnish"
              minLength="10"
              maxLength="150"
              type="text"
              onChange={(e) => dispatch(cocktail.actions.setGarnish(e.target.value))}
              value={cocktailState.garnish}
              placeholder="If no garnish, leave input field blank" />
          </Label>

          <Label htmlFor="preparation">Preparation
            <textarea
              id="preparation"
              minLength="10"
              maxLength="350"
              onChange={(e) => dispatch(cocktail.actions.setPreparation(e.target.value))}
              value={cocktailState.preparation}
              placeholder="How to make the cocktail"
              required />
          </Label>
          <Label htmlFor="image">Google Image Search Link
            <Input
              add
              id="imagesLink"
              minLength="10"
              type="text"
              onChange={(e) => dispatch(cocktail.actions.setImageSearchLink(e.target.value))}
              value={cocktailState.imageSearchLink}
              placeholder="URL for Google image search results"
              required />
          </Label>
          <Label htmlFor="notes">Notes
            <Input
              add
              id="notes"
              type="text"
              onChange={(e) => dispatch(cocktail.actions.setNotes(e.target.value))}
              value={cocktailState.notes}
              placeholder="Any extra notes?" />
          </Label>
          <FilledBtn type="submit">Submit</FilledBtn>
        </AddForm>
        <div>
          <HR />
        </div>
        {response.message
          ? <Mess>{response.message}</Mess>
          : <Mess>{response}</Mess>}
      </AddWrapper>
    </>
  );
};

export default AddCocktail;
