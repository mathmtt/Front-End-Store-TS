import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Search from './pages/Researches';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
    </Routes>
  );
}

export default App;
