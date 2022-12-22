/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { postCocktail } from 'utils/utils';
import { SubmitBtn } from './styled/Buttons.styled';
import { AddForm } from './styled/Forms';

const AddCocktail = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [garnish, setGarnish] = useState('');
  const [preparation, setPreparation] = useState([]);
  const [imageSearchLink, setImageSearchLink] = useState('');
  const [notes, setNotes] = useState('');
  const [newCocktail, setNewCocktail] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setNewCocktail({
      cocktailName,
      category,
      ingredients,
      garnish,
      preparation,
      imageSearchLink,
      notes
    });

    console.log(newCocktail);

    postCocktail(newCocktail);

    setCocktailName('');
    setCategory('');
    setIngredients('');
    setGarnish('');
    setPreparation('');
    setImageSearchLink('');
    setNotes('');
    setNewCocktail({});
  };

  return (
    <AddForm onSubmit={handleFormSubmit}>
      <div>
        <h3>Add New Cocktail</h3>

        <label htmlFor="cocktailName">Name</label>
        <input
          id="cocktailName"
          type="text"
          onChange={(e) => setCocktailName(e.target.value)}
          value={cocktailName}
          placeholder='E.g. "Dry Martini"'
          required />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required>
          <option value="" disabled>
            Choose IBA Category:
          </option>
          <option value="the unforgettables">The Unforgettables</option>
          <option value="contemporary classics">Contemporary Classics</option>
          <option value="new era drinks">New Era Drinks</option>
        </select>

        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          onChange={(e) => setIngredients(e.target.value)}
          value={ingredients}
          placeholder="E.g. 3 cl Gin, 3 Campari, 3 cl sweet vermouth"
          required />

        <label htmlFor="garnish">Garnish</label>
        <input
          id="garnish"
          type="text"
          onChange={(e) => setGarnish(e.target.value)}
          value={garnish}
          placeholder="If no garnish – leave input field blank" />

        <label htmlFor="preparation">Preparation</label>
        <textarea
          id="preparation"
          onChange={(e) => setPreparation(e.target.value)}
          value={preparation}
          placeholder="How to make the cocktail"
          required />

        <label htmlFor="image">Google Image Search Link</label>
        <input
          id="imagesLink"
          type="text"
          onChange={(e) => setImageSearchLink(e.target.value)}
          value={imageSearchLink}
          placeholder="URL for Google image search results"
          required />

        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          type="text"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          placeholder="Any extra notes?" />

        <SubmitBtn type="submit">Submit</SubmitBtn>
      </div>
    </AddForm>
  );
};

export default AddCocktail;
