import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./frames/Portfolio";
import About from "./frames/AboutMe";
import Contacts from "./frames/Contacts";
import Report from "./frames/Report";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;