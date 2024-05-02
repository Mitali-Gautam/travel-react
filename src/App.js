import React from 'react';
import {Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Home from './pages/Home';
import Countries from './pages/Countries';
import Hotels from './pages/Hotels';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Render Hotels component for both "/" and "/Hotels" paths */}
            <Route path="/Countries" element={<Countries />} />
            <Route path="/Hotels" element={<Hotels />} />
          </Routes>
        </main>
        <Footer />
      </div>

  );
}

export default App;
