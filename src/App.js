import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './Screen/HomePage';
import Login from './Screen/LoginPage';


const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
      <Route exact path='/'  element={<Home />}/>
      <Route exact path='/login' element={<Login/>}/>
      

      </Routes>

      <Footer/>
    </div>
  )
}

export default App