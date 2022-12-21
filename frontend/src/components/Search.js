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
          <label htmlFor="search">Cocktail Menu</label>
          <input type="text" id="search" placeholder="Type here..." />
          {/* <button type="button">Filter search</button>
          <div>
            <fieldset>
            <label htmlFor="shaken">Shaken</label>
            <input type="radio" id="shaken" />
              <label htmlFor="stirred">Stirred</label>
              <input type="radio" id="stirred" />
              </fieldset>
              <fieldset>
              <label htmlFor="stiff">Stiff</label>
              <input type="checkbox" id="stiff" />
              <label htmlFor="stiff">Sour</label>
              <input type="checkbox" id="sour" />
              <label htmlFor="stiff">Sweet</label>
              <input type="checkbox" id="sweet" />
              <label htmlFor="stiff">Bitter</label>
              <input type="checkbox" id="Bitter" />
              </fieldset>
              <select>
              <option value="">Glassware</option>
              <option>Rocks</option>
              <option>Flute</option>
              <option>Coupe</option>
              <option>Martini</option>
              </select>
            </div> */}
          <button type="submit" onClick={handleFormSubmit}>Search</button>
        </form>
      </div>
      <List />
    </>
  )
};

export default Search;
