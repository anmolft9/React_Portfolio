import "../App.css";
import { Layout } from "./Layout";

import colorGame from "../Assets/colorGame.png";

export const Projects = () => {
  return (
    <Layout>
      <section id="projects" class="projects mt-5">
        <div class="container">
          <h3 class="abt mb-4">Projects</h3>

          <div class="row mb-4">
            <div class="col-md">
              <img
                class="p"
                src={colorGame}
                width="100%"
                height="100%"
                alt="oopsss"
              />
            </div>
            <div class="col-md bg-info text-center">
              <h3>The Color Game</h3>
              <div>
                <a href="">
                  <i class="fa-brands fa-github text-white"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome text-white"></i>
                </a>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                explicabo impedit adipisci officiis cum laborum pariatur soluta.
                Id molestiae dolorem sint cum? Nemo dolore, repellendus quos
                facere non possimus neque?
              </p>
            </div>
          </div>
          {/* <!-- second --> */}

          <div class="row mb-4">
            <div class="col-md order-md-2">
              <img
                class="p"
                src={colorGame}
                width="100%"
                height="100%"
                alt="oopsss"
              />
            </div>
            <div class="col-md bg-info text-center">
              <h3>The Color Game</h3>
              <div>
                <a href="">
                  <i class="fa-brands fa-github text-white"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome text-white"></i>
                </a>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                explicabo impedit adipisci officiis cum laborum pariatur soluta.
                Id molestiae dolorem sint cum? Nemo dolore, repellendus quos
                facere non possimus neque?
              </p>
            </div>
          </div>
          {/* <!-- third --> */}

          <div class="row mb-4">
            <div class="col-md">
              <img
                class="p"
                src={colorGame}
                width="100%"
                height="100%"
                alt="oopsss"
              />
            </div>
            <div class="col-md bg-info text-center">
              <h3>The Color Game</h3>
              <div>
                <a href="">
                  <i class="fa-brands fa-github text-white"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome text-white"></i>
                </a>
              </div>
              <div class="project-content"></div>
              <div class="m-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  explicabo impedit adipisci officiis cum laborum pariatur
                  soluta. Id molestiae dolorem sint cum? Nemo dolore,
                  repellendus quos facere non possimus neque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
