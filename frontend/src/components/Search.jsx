/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { getCocktails } from 'utils/utils';
import List from './List';
import { SearchForm } from './styled/Forms';
import { FilterBtn, SearchBtn, ShowCategoriesBtn } from './styled/Buttons.styled';
import Loading from './Loading';
import { H1 } from './styled/elements/Headings.styled';

const Search = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  // fix loading animation
  console.log(loading);

  // GET all cocktails when component mounts
  useEffect(() => {
    setLoading(true);
    getCocktails('cocktails')
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  // GET what's found when searching
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true)

    getCocktails(`cocktails?name=${searchInput}`)
      .then((data) => setCocktailList(data.response))
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false)
        setSearchInput('')
      })
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
        <SearchForm onSubmit={handleFormSubmit}>
            <H1>IBA Cocktail List</H1>
          <fieldset>
          <label htmlFor="search" />
            <input type="text" id="search" placeholder='E.g. "Manhattan"' onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />
            <SearchBtn type="submit">Search</SearchBtn>
          </fieldset>
          <ShowCategoriesBtn type="button" onClick={() => setShowCategories(!showCategories)}>Filter by category</ShowCategoriesBtn>
          {showCategories
          && <div>
            <FilterBtn
              type="button"
              onClick={() => handleCategoryBtnClick('the-unforgettables')}>
              The Unforgettables
            </FilterBtn>
            <FilterBtn
              type="button"
              onClick={() => handleCategoryBtnClick('contemporary-classics')}>
              Contemporary Classics
            </FilterBtn>
            <FilterBtn
              type="button"
              onClick={() => handleCategoryBtnClick('new-era-drinks')}>
              New Era Drinks
            </FilterBtn>
             </div>}
        </SearchForm>
      </div>
      {loading ? <Loading />
        : <List cocktailList={cocktailList} />}
    </>
  );
};

export default Search;
