import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cocktailName: null,
  cateogry: null,
  ingredients: [],
  garnish: null,
  preparation: null,
  imageSearchLink: null,
  notes: null
};

export const cocktail = createSlice({
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