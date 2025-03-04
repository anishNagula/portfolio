import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './App.css'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <MainNavbar onLogout={handleLogout} />
              <Home user={user} onLogout={handleLogout} currentUser={user} />
            </RequireAuth>
          }
        />


        <Route
          path="/profile"
          element={
            <RequireAuth>
              <MainNavbar onLogout={handleLogout} />
              <div>Profile Page</div>
            </RequireAuth>
          }
        /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;