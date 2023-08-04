import React from "react";
import About from "../../components/about/About";
import Zircosoft from "../../components/zircosoft/Zircosoft";
import Products from "../../components/products/Products";
import Choose from "../../components/choose/Choose";
import Reviews from "../../components/reviews/Reviews";
import Faq from "../../components/faq/Faq";
import Resources from "../../components/resources/Resources";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Home() {
    return (
        <div className="home-container">
          <Header/>
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