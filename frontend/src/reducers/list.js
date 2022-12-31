/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const list = createSlice({
  name: 'List',
  initialState: {
    cocktailList: [],
    clickedCocktail: {}
  },
  reducers: {
    setCocktailList: (state, action) => {
      state.cocktailList = action.payload;
    },
    setClickedCocktail: (state, action) => {
      state.cocktailList.forEach((item) => {
        if (item._id === action.payload) {
          state.clickedCocktail = item
        }
      });
    }
  }
});

export default list;