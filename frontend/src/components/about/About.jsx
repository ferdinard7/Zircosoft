import React from "react";
import "./about.css";
import { Link } from "react-router-dom";


function About() {
    return (
  <div className="about-container" id="/">
  <h1 className="about-heading">World's Easiest Digital Currency Exchange</h1>
    <p className="about-span">Join millions of people globally, to buy and sell digital currencies the secure and seamless way</p>

    <button className="about-register"><Link to="/register">register</Link></button>
    <button className="about-login" id="about"><Link to="/login">login</Link></button>

  
  </div>
    )
}


export default About;