import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from 'components/Search';
import SignIn from 'components/SignIn';
import AddForm from 'components/AddForm';
import About from 'components/About';
import Contact from 'components/Contact';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
