// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OutOfOfficeState1Employee from './pages/outofofficeState_1_Employee';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<OutOfOfficeState1Employee />} />
      </Routes>
    </>
  );
}

export default App;