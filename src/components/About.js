import avatar from "../Assets/avatar.svg";
import "../App.css";
import { Layout } from "./Layout";

export const About = () => {
  return (
    <Layout>
      <div id="about" class="container mb-5">
        <div class="abt-title mt-5">
          <h3 class="abt mb-4">About me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            voluptates iste dicta, recusandae architecto dignissimos reiciendis
            placeat autem dolore illo commodi quo, quae voluptatum rem est
            doloremque perspiciatis natus molestias nemo et labore sequi unde
            atque reprehenderit. Est veritatis odit officiis iure aliquid
            exercitationem sint, ut, modi, amet temporibus illum.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 text-center">
            <img src={avatar} alt="" id="photo" />
          </div>
          <div class="col-lg-8">
            <h2>Web/ Software Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              deserunt necessitatibus sit dignissimos reprehenderit ipsum
              excepturi temporibus quod aut ullam.\
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>Birthday:</li>
                  <li>website</li>
                  <li>Phone:</li>
                  <li>City:</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>Age:</li>
                  <li>Degree:</li>
                  <li>Email:</li>
                  <li>Freelance:</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="abt-last mt-5">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            doloremque aspernatur sit iste dolores. Eum at esse odit possimus
            pariatur deleniti iure quisquam laudantium blanditiis eligendi,
            eaque impedit error excepturi facilis, nemo natus velit a reiciendis
            maiores corporis! Totam dolorum veritatis suscipit aperiam culpa
            ullam sit dignissimos quidem illum alias.
          </p>
        </div>
      </div>
    </Layout>
  );
};
