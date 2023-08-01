import React from "react";
import About from "../../about/About";
import Zircosoft from "../../zircosoft/Zircosoft";
import Products from "../../products/Products";
import Choose from "../../choose/Choose";
import Reviews from "../../reviews/Reviews";
import Faq from "../../faq/Faq";
import Resources from "../../resources/Resources";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

function Home() {
    return (
        <div className="home-container">
          <Navbar />
          <About />
          <Zircosoft />
          <Products />
          <Choose />
          <Reviews />
          <Faq />
          <Resources />
          <Footer />
        </div>
   
    )
}

export default Home;