import avatar from "../Assets/avatar.svg";
import "../App.css";
import { Layout } from "./Layout";

export const About = () => {
  return (
    <Layout>
      <div id="about" class="container mb-5 vh-100">
        <div class="abt-title mt-5">
          <h3 class="abt mb-4">About me</h3>
          <p>
            <span>Graduate Software Developer(Engineer)</span> with Master’s
            degree in Technology(Software Engineering) from the
            <span> Federation University</span>. I have always been interested
            to learn and implement various computer languages since I was a kid
            and have the capability to solve the problems logically using the
            modern tools. I have always been a very good learner. I have got a
            very good communication skills as well. So, now as I have completed
            my master's, my desire to work in an IT industry is growing day by
            day. I want to start my career as a
            <span> Software/ Web developer</span> and keep growing on as a
            Professional. THANK YOU for making time to know about me. I really
            APPRECIATE it. Stay happy and healthy.😁
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 text-center">
            <img src={avatar} alt="" id="photo" />
          </div>
          <div class="col-lg-8">
            <h2>Web/ Software Developer</h2>
            <p>
              Till now, I have got the skills on{" "}
              <span>
                HTML, CSS, BOOTSTRAP, JAVASCRIPT, NODEJS, ReactJS, JAVA, MYSQL,
                Mongo DATABASE and BASIC PHP
              </span>
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>Birthday: 16 January 1995</li>
                  <li>website: </li>
                  <li>Phone: (+61) 0420724335</li>
                  <li>City: Canberra</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li>Age: 27</li>
                  <li>Degree: Master</li>
                  <li>Email: anmol.bhattarai18@gmail.com</li>
                  <li>Freelance: Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="abt-last mt-5">
          <p>
            I am always keen on upgrading my skills. So, at the moment, I am
            studying Full stack development/MERN Stack devepment at{" "}
            <span>Dented Code Academy</span> as I want to go more advanced on
            the <span>JAVASCRIPT</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
};
