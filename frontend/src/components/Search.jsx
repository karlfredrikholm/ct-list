/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import List from './List';
import { SearchForm } from './styled/Forms';
import { FilterBtn, SearchBtn } from './styled/Buttons.styled';

const handleFormSubmit = (event) => {
  event.preventDefault()
};

const handleCategoryBtnClick = (category) => {
  console.log(category)
};

const Search = () => {
  return (
    <>
      <div>
        <SearchForm onSubmit={handleFormSubmit}>
          <label htmlFor="search"><h1>IBA Cocktail List</h1></label>
          <fieldset>
            <input type="text" id="search" placeholder='E.g. "Manhattan"' />
            <SearchBtn type="submit">Search</SearchBtn>
          </fieldset>
          <h3>Show all in one category</h3>
          <div>
            <FilterBtn type="button" onClick={() => handleCategoryBtnClick('the unforgettables')}>The Unforgettables</FilterBtn>
            <FilterBtn type="button" onClick={() => handleCategoryBtnClick('contemporary classics')}>Contemporary Classics</FilterBtn>
            <FilterBtn type="button" onClick={() => handleCategoryBtnClick('new era drinks')}>New Era Drinks</FilterBtn>
          </div>
        </SearchForm>
      </div>
      <List />
    </>
  )
};

export default Search;
