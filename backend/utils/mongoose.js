import mongoose from 'mongoose';
import crypto from 'crypto';

const CocktailSchema = new mongoose.Schema({
  cocktailName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['the-unforgettables', 'contemporary-classics', 'new-era-drinks']
  },
  ingredients: {
    type: String,
    required: true,
    trim: true
  },
  garnish: {
    type: String,
    trim: true
  },
  preparation: {
    type: String,
    required: true,
    trim: true
  },
  imageSearchLink: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    trim: true
  }
});

export const Cocktail = new mongoose.model('Cocktail', CocktailSchema);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

export const User = new mongoose.model('User', UserSchema);
