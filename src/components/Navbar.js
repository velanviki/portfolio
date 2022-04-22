import React, { useState }  from "react";
import "../styles/Navbar.css"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      {/* <span className="nav-logo">DevLHB</span> */}
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#resume">My Journey</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <img className="suit" src="https://static.vecteezy.com/system/resources/thumbnails/000/356/792/small/Business__2848_29.jpg" alt="img"></img>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
