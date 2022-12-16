import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Cocktail, User } from './utils/mongoose.js';
// import { authenticateUser } from './utils/authenticate.js';

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
  res.send('A ring-a-ding?');
});

// GET /cocktails
app.get('/cocktails', async (req, res) => {
  const {
    page,
    perPage,
    numberPage = +page,
    numberPerPage = +perPage,
    name,
    base,
    shakeOrStirr,
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
      response.body = await Cocktail.find().limit(20);
    }
//    response.body = await Cocktail.find({});
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({
      success: false,
      response: e,
    });
  }
});

// POST /cocktails
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
