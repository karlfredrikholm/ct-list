import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cocktailName: null,
  cateogry: null,
  ingredients: null,
  garnish: null,
  preparation: null,
  imageSearchLink: null,
  notes: null
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

export default cocktail;

// export const postCocktail = () => {
//   return (dispatch, getState) => {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(initialState)
//     };
//   }
// }

// export const postCocktail = async (recipe) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(recipe)
//   };

//   // const res = await fetch(API_URL('cocktails'), options);
//   const res = await fetch(API_URL('cocktails'), options);
//   const json = await res.json();
//   return json;
// };