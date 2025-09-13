import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Story from './components/Story';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import QA from './components/QA';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/details" element={<Details />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/qa" element={<QA />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <p>Ashley & A.J. • 2026</p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;