/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import List from './List';
import { SearchForm } from './styled/Forms';
import { FilterBtn } from './styled/Buttons.styled';

const handleFormSubmit = (event) => {
  event.preventDefault()
};

const Search = () => {
  return (
    <>
      <div>
        <SearchForm onSubmit={handleFormSubmit}>
          <label htmlFor="search">Search IBA Cocktail List</label>
          <input type="text" id="search" placeholder='E.g. "Manhattan"' />
          <FilterBtn type="submit" onClick={handleFormSubmit}>The Unforgettables</FilterBtn>
          <FilterBtn type="submit" onClick={handleFormSubmit}>Contemporary Classics</FilterBtn>
          <FilterBtn type="submit" onClick={handleFormSubmit}>New Era Drinks</FilterBtn>
          <FilterBtn type="submit">Search</FilterBtn>
        </SearchForm>
      </div>
      <List />
    </>
  )
};

export default Search;
