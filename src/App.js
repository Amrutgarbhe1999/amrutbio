import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Importing components
import Navbar from "./components/Navbar";
import Project from "./components/Project"; // Corrected import
import Home from "./components/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* Projects route */}
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
