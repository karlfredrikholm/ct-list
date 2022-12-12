import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
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

export const RecipeScehma = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
});

export const Recipe = mongoose.model('Recipe', RecipeScehma);
