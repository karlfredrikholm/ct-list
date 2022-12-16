import mongoose from 'mongoose';
import crypto from 'crypto';

const CocktailSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
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
    ingredient10: String
  },
  measure: {
    measure1: String,
    measure2: String,
    measure3: String,
    measure4: String,
    measure5: String,
    measure6: String,
    measure7: String,
    measure8: String,
    measure9: String,
    measure10: String
  },
  garnish: {
    type: String
  },
  preparation: {
    type: String,
    trim: true,
    required: true,
  },
  notes: {
    type: String,
    minLength: 5,
    maxLength: 140,
    trim: true,
  },
  createdBy: {
    // default: username 
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
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
export const User = mongoose.model('User', UserSchema);
