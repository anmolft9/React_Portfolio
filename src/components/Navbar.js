import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container mt-3">
        <Link class="nav-link" to="/">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
