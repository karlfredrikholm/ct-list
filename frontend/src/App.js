import React from 'react';
import GlobalStyles from 'components/styled/Global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Search from 'components/Search';
import Nav from 'components/Nav';
import Login from 'components/Login';
import Add from 'components/Add';
import About from 'components/About';
import NotFound from 'components/NotFound';
import Recipe from 'components/Recipe';
import user from 'reducers/user';
import cocktail from 'reducers/cocktail';

const reducer = combineReducers({
  user: user.reducer,
  cocktail: cocktail.reducer
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <Provider store={store}>
            <BrowserRouter>
              <Nav />
              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/cocktails/:id" element={<Recipe />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<Add />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
    </>
  );
};

export default App;
