import "../App.css";
import { Layout } from "./Layout";

import about from "../Assets/about.png";

export const Hero = () => {
  return (
    <Layout>
      <div id="hero" class="hero">
        {/* <!-- contents and picture --> */}
        <div>
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
    </Layout>
  );
};
