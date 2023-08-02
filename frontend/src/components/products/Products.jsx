import React from "react";
import "./products.css";
import Data from "../../data";

function Products() {
    return (
<div className="products-container" id="products">
    <h2 className="products-heading">What do you want to do today?</h2>
    <div className="products-wrapper">
    {Data.map((oneData) => {
        return (
            <div key={oneData.id} className="first" style={{backgroundImage: `url(${oneData.backgroundImg})`}}>
       <h4>{oneData.title}</h4>
       <div className="wrapper">
       <div className="deposit-container">
       <h5>{oneData.Desc}</h5>
       </div>
       <div className="image-container">
       <img  className="img" src={oneData.img} alt={oneData.title} />
       </div>

       </div>
       <h5 className="buy">Buy: {oneData.buy}</h5>
       <h5>Sell: {oneData.sell}</h5>
       
     </div>
        )
    })}
     {/* <div className="first">
       <h4> Deriv</h4>
       <div className="wrapper">
       <div className="deposit-container">
       <h5>Deposit and withraw your deriv funds at the best rate</h5>
       </div>
       <div className="image-container">
       <img  className="img" src="/images/deriv.png" alt="deriv" />
       </div>

       </div>
       <h5 className="buy">Buy: $860/USD</h5>
       <h5>Sell: $830/USD</h5>
       
     </div> */}
     {/* <div className="second">
        second
     </div>
     <div className="third">
        third
     </div> */}
     
    </div>

</div>
    )
}


export default Products;