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
          {/* Add a catch-all route for better mobile handling */}
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;