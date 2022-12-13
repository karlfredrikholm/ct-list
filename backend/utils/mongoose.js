import mongoose from 'mongoose';
import crypto from 'crypto';

const CocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  base: {
    type: String,
    required: true,
  },
  shakenOrStirred: {
    type: String,
    required: true
  },
  garnish: {
    type: String
  },
  preparation: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  }
});

export const Cocktail = new mongoose.model('Cocktail', CocktailSchema);

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

export const User = mongoose.model('User', UserSchema);