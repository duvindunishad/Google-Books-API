import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { AppProvider } from './context';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Book from './components/BookList/Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} ></Route>
      <Route path='about' element = {<About />} ></Route>
      <Route path='book' element = {<Book />} ></Route>
      <Route path='/book/:id' element = {<BookDetails />} ></Route>
      <Route path='booklist' element = {<BookList />} ></Route>
    </Routes>
 </BrowserRouter>
 </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
