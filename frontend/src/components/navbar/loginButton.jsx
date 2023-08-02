import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function loginButton() {
    return (
        <button className="navbar-login-button"><Link to="/login">Login</Link></button>
    )
}


export default loginButton;