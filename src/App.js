import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import CheckoutPage from './CheckoutPage';
import Success from './Success';
import Failed from './Failed';
import Cancelled from './Cancelled';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<CheckoutPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Failed />} />
          <Route path="/cancel" element={<Cancelled />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
