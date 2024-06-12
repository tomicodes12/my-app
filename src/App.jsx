import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
