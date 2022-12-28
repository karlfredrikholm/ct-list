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
    enum: ['the-unforgettables', 'contemporary-classics', 'new-era-drinks'],
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

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});

export const Cocktail = new mongoose.model('Cocktail', CocktailSchema);
export const User = new mongoose.model('User', UserSchema);