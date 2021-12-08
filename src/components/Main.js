import React from 'react';
import { Routes, Route } from "react-router-dom";
import Products from './Products';
import Home from './Home';
import Auth from './Auth';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </div>
  );
};
export default Main;








