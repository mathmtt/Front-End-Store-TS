import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Search from './pages/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
    </Routes>
  );
}

export default App;
