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
      methods: ['GET'],
    },
    {
      path: '/cocktails',
      methods: ['GET', 'POST'],
    },
    {
      path: '/cocktails/:id',
      methods: ['GET'],
    },
    {
      path: '/cocktails/:category',
      methods: ['GET'],
    },
  ]);
});

// GET  all cocktails
app.get('/cocktails', async (req, res) => {
  const {
    page,
    perPage,
    numberPage = +page,
    numberPerPage = +perPage,
  } = req.query;

  const response = {
    success: true,
    body: {},
  };

  try {
    if (page) {
      response.body = await Cocktail.aggregate([
        { $sort: { name: 1 } },
        { $skip: (numberPage - 1) * numberPerPage },
        { $limit: numberPerPage },
      ]);
    } else {
      response.body = await Cocktail.find().limit(20).sort({ 'name': 1 });
    }
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ success: false, response: e });
  }
});

// GET all cocktails in one category
app.get('/cocktails/:category', async (req, res) => {
  const { category } = req.params;

  const response = {
    success: true,
    body: {},
  };

  try {
    if (category) {
      response.body = await Cocktail.find({ category: category }).limit(20).sort({ 'name': 1 });
    } else {
      response.body = await Cocktail.
      find().limit(20).sort({ 'name': 1 });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e,
    });
  }
});

// GET one single cocktail
app.get('cocktails/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const singleCocktail = await Cocktail.findById(id);
    res.status(200).json({ success: true, response: singleCocktail });
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e,
    });
  }
});

// POST new cocktail /cocktails
app.post('/cocktails', async (req, res) => {
  try {
    const newCocktail = await new Cocktail(req.body).save();
    res.status(201).json({
      success: true,
      response: newCocktail,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
