import "./App.css";
import React from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div class="wrapper">
      {/* <!-- hero and navbar --> */}
      <Hero />

      {/* <!-- about me --> */}
      <About />

      {/* <!-- skills --> */}
      <Skills />

      {/* <!-- project section --> */}
      <Projects />

      {/* <!-- contact section --> */}
      <Contact />

      {/* <!-- footer section --> */}
      <Footer />
    </div>
  );
}
export default App;
