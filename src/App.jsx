import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
