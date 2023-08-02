import React from "react";
import "./footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
   <footer className="footer">
    <p> Made with 💖 by Big_Ferd </p>
    <p>&copy; Zircosoft Inc {currentYear}</p>
   </footer>
    )
}


export default Footer;