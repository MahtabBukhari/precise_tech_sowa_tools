import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './Screen/HomePage';
import Login from './Screen/LoginPage';
import ReactTables from './Screen/ReactTables.js/index.js';


const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
      <Route exact path='/'  element={<Home />}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/table' element={<ReactTables/>}/>
      

      </Routes>

      <Footer/>
    </div>
  )
}

export default App