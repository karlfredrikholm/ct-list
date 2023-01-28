import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Cocktail, User } from './utils/mongoose.js';

const port = process.env.PORT || 8080;
const app = express();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project-fredrik';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.promise = Promise;

app.use(cors());
app.use(express.json());

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: 'Please log in.',
        success: false
      });
    }
  } catch (err) {
    res.status(400).json({
      response: err,
      success: false
    });
  }
};

app.get('/', (req, res) => {
  res.send([
    {
      path: '/',
      method: ['GET']
    },
    {
      path: '/cocktails',
      method: ['GET'],
      query: 'name'
    },
    {
      path: '/cocktails/:id',
      method: ['GET']
    },
    {
      path: '/:category',
      method: ['GET']
    },
    {
      path: '/login',
      method: ['POST']
    },
    {
      path: '/add',
      method: ['POST']
    }
  ]);
});

app.get('/cocktails', async (req, res) => {
  const { name } = req.query;
  const searchQuery = {};
  
  try {
    if (name) {
      searchQuery.cocktailName = { $regex: new RegExp(name, 'i') };
    }
    let cocktailList = await Cocktail.find(searchQuery).sort({
      cocktailName: 1
    });
    
    if (!cocktailList.length) {
      res
      .status(404)
      .json({ success: false, response: 'Nothing found, try again.' });
    } else {
      res.status(200).json({ success: true, response: cocktailList });
    }
  } catch (e) {
    res.status(400).json({ success: false, response: e });
  }
});

app.get('/cocktails/:id', async (req, res) => {
  const { id } = req.params;
  const singleCocktail = await Cocktail.findById(id);
  
  try {
    if (singleCocktail) {
      res.status(200).json({
        success: true,
        response: singleCocktail
      });
    } else {
      res.status(404).json({
        success: false,
        response: 'Could not find cocktail'
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e
    });
  }
});

app.get('/:category', async (req, res) => {
  const { category } = req.params;
  let cocktailsInCategory = {};

  try {
    if (category) {
      cocktailsInCategory = await Cocktail.find({ category: category }).sort({
        cocktailName: 1
      });
    } else {
      cocktailsInCategory = await Cocktail.find().sort({ cocktailName: 1 });
    }
    res.status(200).json({ success: true, response: cocktailsInCategory });
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e
    });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: 'Credentials incorrect'
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      response: err
    });
  }
});

app.post('/add', authenticateUser);
app.post('/add', async (req, res) => {
  const { cocktailName } = req.body;
  
  try {
    const cocktailExist = await Cocktail.findOne({ cocktailName: new RegExp(cocktailName, 'i') });
    
    if (cocktailExist) {
      res.status(400).json({
        success: false,
        response: `${cocktailExist.cocktailName} is already in the database`
      });
    } else {
      const newCocktail = await new Cocktail(req.body).save();
      res.status(201).json({
        success: true,
        response: `${newCocktail.cocktailName} successfully saved to database`
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});