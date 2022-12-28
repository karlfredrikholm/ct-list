import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Cocktail } from './utils/mongoose.js';

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

const mongoUrl =
  process.env.MONGO_URL || 'mongodb://localhost/cocktails-project';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.promise = Promise;

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send([
    {
      path: '/',
      methods: ['GET']
    },
    {
      path: '/cocktails',
      methods: ['GET', 'POST']
    },
    {
      path: '/cocktails/:id',
      methods: ['GET']
    },
    {
      path: '/cocktails/:category',
      methods: ['GET']
    }
  ]);
});

// GET  all cocktails
app.get('/cocktails', async (req, res) => {
  const { name } = req.query;
  let cocktailList = {};
  const searchQuery = { $regex: new RegExp(name, "i") };
  
  try {
    if (searchQuery) {
      cocktailList = await Cocktail.find({ "cocktailName": searchQuery }).sort({ cocktailName: 1});
    } else {
      cocktailList = await Cocktail.find().sort({ cocktailName: 1});
    }
    res.status(200).json({ success: true, response: cocktailList });
  } catch (e) {
    res.status(400).json({ success: false, response: e });
  }
});

// const {
//   page,
//   perPage,
//   numberPage = +page,
//   numberPerPage = +perPage
// } = req.query;

// if (page) {
//   cocktailList = await Cocktail.aggregate([
//     { $sort: { cocktailName: 1 } },
//     { $skip: (numberPage - 1) * numberPerPage },
//     { $limit: numberPerPage }
//   ]);
// } else {
// cocktailList = await Cocktail.find().sort({ cocktailName: 1 });

// GET one single cocktail
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

// GET all cocktails in one category
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
    // error message instead?
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e
    });
  }
});


// POST new cocktail /cocktails
app.post('/cocktails', async (req, res) => {
  const { cocktailName } = req.body;

  try {
    const cocktailExist = await Cocktail.findOne({ cocktailName });

    if (cocktailExist) {
      res.status(400).json({
        success: false,
        response: 'This cocktail is already in the database.'
      });
    } else {
      const newCocktail = await new Cocktail(req.body).save();
      res.status(201).json({
        success: true,
        response: newCocktail
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
