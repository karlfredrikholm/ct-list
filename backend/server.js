import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Cocktail, User } from './utils/mongoose.js';
import { authenticateUser } from './utils/authenticate.js';

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
  res.send('Hello World!');
});

// End point for getting
app.get('/cocktail', async (req, res) => {
  try {
    let cocktailList = {};
    const {
      page,
      perPage,
      numberPager = +page,
      numberPerPage = +perPage,
    } = req.query;
    res.status(200).json({
      success: true,
      response: cocktailList,
    });
  } catch (error) {}
});

app.post('/cocktails', authenticateUser);
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
