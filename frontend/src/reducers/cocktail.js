import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/utils';

const initialState = {
  cocktailName: '',
  cateogry: '',
  ingredients: '',
  garnish: '',
  preparation: '',
  imageSearchLink: '',
  notes: ''
};

const cocktail = createSlice({
  name: 'Cocktail',
  initialState,

  reducers: {
    setCocktailName: (state, action) => {
      state.cocktailName = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setGarnish: (state, action) => {
      state.garnish = action.payload;
    },
    setPreparation: (state, action) => {
      state.preparation = action.payload;
    },
    setImageSearchLink: (state, action) => {
      state.imageSearchLink = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    cleanup: () => {
      return initialState;
    }
  }
});

// POST new cockail
export const postCocktail = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().user.accessToken
      },
      body: JSON.stringify(initialState)
    };
    fetch((`${BASE_URL}/add`), options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => dispatch(cocktail.actions.cleanup()))
  };
};

export default cocktail;