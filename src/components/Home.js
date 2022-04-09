import React from "react";
import "../styles/Home.css";
// import Image from "../Image/image.jpg";
function Home() {
  return (
    <div className="home" id="home">
      <div className="row">
        {/* <div className="home__bg"> */}
        {/* <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
           
              <a href="#Home">
                <li className="nav__items nav-link mx__15">Home</li>
              </a>
              <a href="#About Me">
                <li className="nav__items nav-link mx__15">About Me</li>
              </a>
              <a href="#My Journey">
                <li className="nav__items nav-link mx__15">My Journey</li>
              </a>
              <a href="#Project">
                <li className="nav__items nav-link mx__15">Project</li>
              </a>
              <a href="#Contact">
                <li className="nav__items nav-link mx__15">Contact</li>
              </a>
            </ul>
          </div>
           </div> */}
        <div className="col__2">
          <div className="home__content">
            <h3 className="home__text pz__20">WELCOME here!!</h3>
            <h2 className="home__text pz__20">Hi, I’m Velan S</h2>
            <h2 className="home__text sweet pz__20">Full Stack Developer.</h2>
          </div>
        </div>
        {/* <div className="col__2">
          <img src={Image} alt="Image" />;
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
