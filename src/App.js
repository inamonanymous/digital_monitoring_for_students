// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './greetings';
import Dashboard from './dashboard';
import RequestEquipment from './request-equipment';
import Header from './header';
import Footer from './footer';


function App() {
  return (
    <div>
    <Header />
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-equipment/:equip_unique_key" element={<RequestEquipment />} />
      </Routes>
    </Router>
    <Footer />
  </div>
);
}

export default App;
