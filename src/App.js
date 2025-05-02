import React from 'react';
import { BrowserRouter as Router,  Routes, Route,  } from 'react-router-dom';
import SignupForm from './SignupForm'; 
import Dashboard from './Dashboard';  

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to show Signup form */}
        <Route path="/" element={<SignupForm />} />
        
        {/* Route to show Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>

  );
}

export default App;

// /dashboard