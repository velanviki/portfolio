import React from "react";
import "../styles/About.css";
import Image from "../Image/image.jpg";
function About() {
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="img">
              <img src={Image} alt="Image" />;
            </div>
          </div>

          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                <li>
                  An Enthusiastic Full Stack Developer with good knowledge in
                  HTML,Css,JS and MERN stack.
                </li>
              </p>

              <p className="about__text p__color">
                <li>
                  Looking for a platform to explore my skills and to learn
                  something new everyday.
                </li>
              </p>
              <p className="about__text p__color">
                <li>A good team player.</li>
              </p>

              <div className="about__button d__flex align__items__center">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1JpGXgmE6fRSLEK08DZilSYHY6fPi6S-9/view?usp=sharing"
                >
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
