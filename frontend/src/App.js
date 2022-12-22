import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from 'components/Search';
import Nav from 'components/Nav';
import SignIn from 'components/SignIn';
import AddCocktail from 'components/AddCocktail';
import About from 'components/About';
import Contact from 'components/Contact';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/add" element={<AddCocktail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
