/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddForm = () => {
  return (
    <div>
      <form>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="base">Base</label>
        <input type="text" id="base" />

        <label htmlFor="shaken">Shaken</label>
        <input type="radio" id="shaken" />

        <label htmlFor="stirred">Stirred</label>
        <input type="radio" id="stirred" />

        <label htmlFor="measurements">Measurements</label>
        <input type="number" id="measurements" />

        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" id="ingredients" />

        <label htmlFor="garnish">Garnish</label>
        <input type="text" id="garnish" />

        <label htmlFor="preparation">Preparation</label>
        <input type="textfield" id="preparation" />

        <label htmlFor="notes">Notes</label>
        <input type="text" id="notes" />

      </form>
    </div>
  );
};

export default AddForm;
