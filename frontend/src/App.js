import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
// import Search from 'components/Search';
import SingleCocktail from 'components/SingleCocktail';
import SignIn from 'components/SignIn';
import AddForm from 'components/AddForm';
import About from 'components/About';
import Contact from 'components/Contact';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <div className="outer-wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<SingleCocktail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
