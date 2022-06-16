import "../App.css";
import { Layout } from "./Layout";

export const Skills = () => {
  return (
    <Layout>
      <div id="skills" class="container">
        <div class="row mt-5">
          <div class="col">
            {/* <!-- title --> */}
            <div class="title">
              <h3 class="abt mb-4">Skills</h3>
            </div>
            {/* <!-- icons --> */}
            <div class="icons fw-bolder d-flex flex-wrap justify-content-around">
              <div>
                <i class="fa-brands fa-html5 text-danger"></i>HTML
              </div>
              <div>
                <i class="fa-brands fa-css3-alt text-primary"></i>CSS
              </div>
              <div>
                <i class="fa-brands fa-bootstrap text-info"></i>Bootstrap
              </div>
              <div>
                <i class="fa-brands fa-github text-info"></i>Github
              </div>
              <div>
                <i class="fa-brands fa-figma text-danger"></i>Figma
              </div>
              <div>
                <i class="fa-brands fa-js text-warning"></i>Javascript
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
