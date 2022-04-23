import React from "react";
import "../styles/About.css";
import Image from "../Image/image.jpg";
function About() {
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col__2">
            <h1 className="about__skills">Skills</h1>
            <h4 className="title">HTML5
            <img className="titles" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/5847f5bdcef1014c0b5e489c_mwgmv3.png' alt='HTML 5' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-success"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>


  

            <h4 className="title">CSS
            <img className="titless" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299529/css_zszamh.png' alt='CSS 3' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-50 bg-danger"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

   

            <h4 className="title">JAVASCRIPT
            <img className="titlesss" src='https://res.cloudinary.com/dj0pjewbs/image/upload/v1625299530/JS_oehidy.png' alt='JS' /></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-secondary"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h4 className="title">MERN stack
            <img className="mern"src="https://miro.medium.com/max/900/1*Dc5f6x9KxALujjUDzn7PWw.jpeg"/></h4>
            <div class="progress">
              <div
                class="progress-bar w-75 bg-primary"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="50"
                aria-valuemax="10"
              ></div>
            </div>

          


          </div> */}

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
                  An Enthusiastic Full Stack Developer with good knowledge in HTML,Css,JS and MERN stack.
                  
                </li>
                </p>
                
              <p className="about__text p__color">
                <li>Looking for a platform to explore my skills and to learn something new everyday.</li>
              </p>
              <p className="about__text p__color">
                <li>
                  A good team player.
                
                </li>
              </p>
              
              <div className="about__button d__flex align__items__center">
                <a target="_blank" href="https://drive.google.com/file/d/19y1O5Ol9PIsRPP0ViN_Xrko49DdnuLz0/view">
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
