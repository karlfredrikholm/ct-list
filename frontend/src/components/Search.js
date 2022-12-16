/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import List from './List';

const handleFormSubmit = () => {
  console.log('searched');
};
const Search = () => {
  return (
    <>
      <div>
        <form>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" placeholder="Search..." />
          <label htmlFor="shaken">Shaken</label>
          <input type="radio" id="shaken" />
          <label htmlFor="stirred">Stirred</label>
          <input type="radio" id="stirred" />
          <button type="submit" onClick={handleFormSubmit}>Search</button>
        </form>
      </div>
      <List />
    </>
  )
};

export default Search;
