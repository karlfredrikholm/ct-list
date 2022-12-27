/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import List from './List';
import { SearchForm } from './styled/Forms';
import { FilterBtn, SearchBtn } from './styled/Buttons.styled';

const handleFormSubmit = (event) => {
  event.preventDefault()
};

const Search = () => {
  return (
    <>
      <div>
        <SearchForm onSubmit={handleFormSubmit}>
          <label htmlFor="search"><h1>Search IBA Cocktail List</h1></label>
          <fieldset>
            <input type="text" id="search" placeholder='E.g. "Manhattan"' />
            <SearchBtn type="submit">Search</SearchBtn>
          </fieldset>
          <h5>Show all in one category</h5>
          <div>
            <FilterBtn type="submit" onClick={handleFormSubmit}>The Unforgettables</FilterBtn>
            <FilterBtn type="submit" onClick={handleFormSubmit}>Contemporary Classics</FilterBtn>
            <FilterBtn type="submit" onClick={handleFormSubmit}>New Era Drinks</FilterBtn>
          </div>
        </SearchForm>
      </div>
      <List />
    </>
  )
};

export default Search;
