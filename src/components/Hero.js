import "../App.css";

import about from "../Assets/about.png";

export const Hero = () => {
  return (
    <div id="hero" class="hero">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container mt-3">
          <a class="navbar-brand" href="#hero">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- contents and picture --> */}
      <div class="container mt-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-5 text-center text-white">
            <div class="fs-1">Anmol Bhattarai</div>
            <p>A software developer</p>
          </div>
          <div class="col-md-7 order-md-1">
            <img src={about} width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
