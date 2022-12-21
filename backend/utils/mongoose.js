import mongoose from 'mongoose';

const CocktailSchema = new mongoose.Schema({
  cocktailName: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['the unforgettables', 'contemporary classics', 'new era drinks'],
  },
  ingredients: {
    type: String,
    minLength: 8,
    maxLength: 140,
    trim: true,
    required: true,
  },
  garnish: {
    type: String,
  },
  preparation: {
    type: String,
    maxLength: 500,
    trim: true,
    required: true,
  },
  imageSearchLink: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    maxLength: 140,
    trim: true,
  },
});

export const Cocktail = new mongoose.model('Cocktail', CocktailSchema);
