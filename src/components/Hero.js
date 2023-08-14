import "../App.css";
import { Layout } from "./Layout";

import about from "../Assets/about.png";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Hero = () => {
  return (
    <Layout>
      {/* <!-- contents and picture --> */}
      <Navbar />
      <>
        <div
          id="hero"
          class=" hero row justify-content-center align-items-center "
        >
          <div class="col-md-5 text-center text-white">
            <div class="fs-1">Anmol Bhattarai</div>
            <p>A software developer</p>
          </div>
          {/* <div class="col-md-5 order-md-1">
            <img id="hero-picture" src={about} width="40%" alt="" />
          </div> */}
        </div>
      </>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};
