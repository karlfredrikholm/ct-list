/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import List from './List';
import { FilledBtn, BorderBtn } from './styled/Buttons.styled';
import Loading from './Loading';
import { H1 } from './styled/Headings.styled';
import { Input } from './styled/Input.styled';
import { Form } from './styled/Forms.styled';

const Search = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCategories, setShowCategories] = useState(false);

  // GET all cocktails when component mounts
  useEffect(() => {
    setLoading(true)
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(true);
      });
  }, []);

  // GET what's found when searching
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSearchInput('');
    getCocktails(`cocktails?name=${searchInput}`)
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  // GET all cocktails in one category
  const handleCategoryBtnClick = (category) => {
    getCocktails(category)
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <H1>IBA Cocktail List</H1>
          <fieldset>
            <label htmlFor="search" />
            <Input
              mr
              type="search"
              id="search"
              placeholder='E.g. "Manhattan"'
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput} />
            <FilledBtn type="submit">Search</FilledBtn>
          </fieldset>
          <BorderBtn
            type="button"
            onClick={() => setShowCategories(!showCategories)}>
            Filter by category
          </BorderBtn>
          {showCategories && (
            <div>
              <FilledBtn
                type="button"
                onClick={() => handleCategoryBtnClick('the-unforgettables')}>
                Unforgettables
              </FilledBtn>
              <FilledBtn
                type="button"
                onClick={() => handleCategoryBtnClick('contemporary-classics')}>
                Contemporary
              </FilledBtn>
              <FilledBtn
                type="button"
                onClick={() => handleCategoryBtnClick('new-era-drinks')}>
                New Era
              </FilledBtn>
            </div>
          )}
        </Form>
      </div>
      {loading ? <Loading /> : <List cocktailList={cocktailList} />}
    </>
  );
};

export default Search;
