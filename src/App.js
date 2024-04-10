import React, { useState } from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import Form5 from './components/Form5';
import Final from './components/Final';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() { 

  return (
       <Router>
      <Routes>
      <Route path='/' element={<Form1/>}/>
      </Routes>
      <Routes>
        <Route path='/form2' element={<Form2/>}/>
        <Route path='/form3' element={<Form3/>}/>
        <Route path='/form4' element={<Form4/>}/>
        <Route path='/form5' element={<Form5/>}/>
        <Route path='/final' element={<Final/>}/>
      </Routes>
    </Router>
  );
}

export default App;
