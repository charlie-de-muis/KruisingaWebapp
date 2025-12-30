import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import VideoPage from './pages/videoPage';
import LeerlingToevoegen from './pages/LeerlingToevoegen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/leerlingtoevoegen" element={<LeerlingToevoegen />} />
      </Routes>
    </Router>
  );
}

export default App;
