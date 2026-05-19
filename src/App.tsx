import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Adventure from './pages/Adventure';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect old /hotelbooking links to /services */}
          <Route path="/hotelbooking" element={<Navigate to="/services" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
