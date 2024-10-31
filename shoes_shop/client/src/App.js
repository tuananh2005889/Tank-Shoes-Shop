import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Homepage/HomepageLayout';
import Admin from './admin/AdminLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
