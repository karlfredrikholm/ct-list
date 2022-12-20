import mongoose from 'mongoose';
import crypto from 'crypto';
import { stringify } from 'querystring';

const CocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['the unforgettables', 'contemporary classics', 'new era drinks'],
  },
  ingredients: {
    ingredient1: String,
    ingredient2: String,
    ingredient3: String,
    ingredient4: String,
    ingredient5: String,
    ingredient6: String,
    ingredient7: String,
    ingredient8: String,
    ingredient9: String,
    ingredient10: String,
    trim: true,
    required: true,
  },
  garnish: {
    type: String,
  },
  preparation: {
    step1: String,
    step2: String,
    step3: String,
    step4: String,
    step5: String,
    trim: true,
    required: true,
  },
  imageSearchLink: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    minLength: 5,
    maxLength: 140,
    trim: true,
  },
});

export const Cocktail = new mongoose.model('Cocktail', CocktailSchema);
