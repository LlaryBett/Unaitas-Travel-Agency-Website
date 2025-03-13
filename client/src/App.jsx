import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // New layout for About & Contact
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home includes its own Navbar inside Hero */}
        <Route path="/" element={<Home />} />

        {/* Other pages use Layout (which contains the Navbar) */}
        <Route element={<Layout />}>
       
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
