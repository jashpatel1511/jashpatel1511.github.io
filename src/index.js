import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// pages
import Root from "./Pages/Root";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/qualification" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
