/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import List from './List';
import { SearchForm } from './styled/Forms';

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
          <button type="submit" onClick={handleFormSubmit}>The Unforgettables</button>
          <button type="submit" onClick={handleFormSubmit}>Contemporary Classics</button>
          <button type="submit" onClick={handleFormSubmit}>New Era Drinks</button>
          <button type="submit">Search</button>
        </SearchForm>
      </div>
      <List />
    </>
  )
};

export default Search;
