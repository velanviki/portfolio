import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Resume from "./components/My journey";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="App">
      <Router>
      
      <Navbar/> 
      <div>  
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Resume/> 
      <Contact/>
      </div> 
      <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
