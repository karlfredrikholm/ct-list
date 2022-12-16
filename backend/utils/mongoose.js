import mongoose from 'mongoose';
import crypto from 'crypto';

const CocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  measurements: {
    type: Number,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  preparation: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    minLength: 5,
    maxLength: 140,
    trim: true
  },
  createdBy: {
    // the logged in user's username
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
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
export const User = mongoose.model('User', UserSchema);