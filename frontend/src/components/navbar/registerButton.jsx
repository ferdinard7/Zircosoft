import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function registerButton() {
    return (
        <button className="navbar-register-button"><Link to="/register">Register</Link></button>
    )
}


export default registerButton;