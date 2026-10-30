import React from 'react';
import PointCloudAnimation from './PointCloudAnimation';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './AboutMe';

function Minigame() {
  return (
    <div className="Minigame">
      <Link className="home-link" to="/">← Home</Link>
      <div className="objective-text">
        <h1>Shoot the center sphere 5 times!</h1>
      </div>
      <div className="point-cloud-container">
        <PointCloudAnimation />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/minigame" element={<Minigame />} />
          {/* Old links (e.g. /home) and unknown paths go to the home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;