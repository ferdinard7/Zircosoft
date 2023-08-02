import React from "react";
import "./reviews.css";


function Reviews() {
    return (
        <div className="reviews-container" id="reviews">
     <h2 className="reviews-heading">Testimonials</h2>
     <p className="reviews-paragraph">Hear from our 10,000+ happy customers</p>

     <div className="reviews-wrapper">
     <div className="reviews-card">
      <img  className="reviews-img" src="/images/quote.svg" alt="" />
      <p className="reviews-details">Always fast and very reliable. Thanks for the improvements and consistency...</p>
      <small> ~ Kenny Isah ~</small>
     </div>
     <div className="reviews-card">
      <img  className="reviews-img" src="/images/quote.svg" alt="" />
      <p className="reviews-details">You've got a seamless and excellent withdrawal process. I'll be sticking with your plat form!</p>
      <small> ~ Musa Jon ~</small>
     </div>
     <div className="reviews-card">
      <img className="reviews-img"  src="/images/quote.svg" alt="" />
      <p className="reviews-details">Always fast and very reliable. Thanks for the improvements and consistency...</p>
      <small> ~ Kenny Isah ~</small>
     </div>
     <div className="reviews-card">
      <img src="/images/quote.svg" alt="" />
      <p className="reviews-details">You've got a seamless and excellent withdrawal process. I'll be sticking with your plat form!</p>
      <small> ~ Musa Jon ~</small>
     </div>

     </div>
        </div>

    )
}


export default Reviews;
