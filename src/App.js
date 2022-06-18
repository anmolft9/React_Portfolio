import "./App.css";
import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          {/* <!-- hero and navbar --> */}
          <Route path="/" element={<Hero />} />
          {/* <!-- about me --> */}
          <Route path="/about" element={<About />} />
          {/* <!-- skills --> */}
          <Route path="/skills" element={<Skills />} />
          {/* <!-- project section --> */}
          <Route path="/projects" element={<Projects />} />
          {/* <!-- contact section --> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
