import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import RegisterButton from "./registerButton";
import LoginButton from "./loginButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

    return (
        <div className="navbar-container">
        <div className="navbar-wrapper">
        <div className="left">
        <h1 className="navbar-logo">Zircosoft</h1>
        
        </div>
        <div className="center">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <span>☰</span> {/* You can use any icon here */}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
          <div className="menu-item">Home</div>
          <div className="menu-item">About</div>
          <div className="menu-item">Products</div>
          <div className="menu-item">Review</div>
          <div className="menu-item">FAQ</div>
          <div className="menu-item">
            <button className="navbar-register-button">Register</button>
          </div>
          <div className="menu-item">
            <button className="navbar-login-button">Login</button>
          </div>
          </div>
         
        )}

        </div>
        <div className="right">
        <div className="menu-item"><Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link></div>
          <div className="menu-item"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></div>
          <div className="menu-item"><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Products</Link></div>
          <div className="menu-item"><Link to="reviews" spy={true} smooth={true} offset={50} duration={500}>Review</Link></div>
          <div className="menu-item"><Link to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link></div>
          <div className="menu-item">
          <RegisterButton />
          {/* <button className="navbar-register-button"><Link to="/register">Register</Link></button> */}
          </div>
          <div className="menu-item">
           <LoginButton />
          </div>
          </div> 

        
       

      
        </div>
        </div>
    )
}


export default Navbar;