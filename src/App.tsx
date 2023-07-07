import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Search from './pages/Researches';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import NotFound from './pages/NotFound/NotFound';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route path="/shopping-cart" element={ <ShoppingCart /> } />
      <Route path="/product-details/:id" element={ <ProductDetails /> } />
      <Route path="/checkout" element={ <Checkout /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
