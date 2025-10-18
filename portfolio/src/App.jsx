import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPortfolio from './MainPortfolio';
import Freelance from './pages/Freelance';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;