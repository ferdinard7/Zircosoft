import React from "react";
import "./choose.css";
// import BoltIcon from '@mui/icons-material/Bolt';
// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

function Choose() {
    return (
        <div className="choose-container">
        <h2 className="choose-heading">Why Choose Us?</h2>
        <div className="choose-wrapper">
          <div className="first-icon">
            {/* Content of the first icon */}
            <div>
            <i class="fa-solid fa-bolt-lightning try"></i>
   <h4>Fast Transactions</h4>
   </div>
          </div>
          <div className="first-icon">
            <div>
              <i className="fa-solid fa-headphones try1"></i>
              <h4>24/7 Service</h4>
            </div>
          </div>
          <div className="first-icon">
            <div>
              <i className="fa-solid fa-shield try2"></i>
              <h4>Security and Reliability</h4>
            </div>
          </div>
          <div className="first-icon">
            <div>
              <i className="fa-regular fa-eye try3"></i>
              <h4>Transparency</h4>
            </div>
          </div>
        </div>
      </div>
      
    )
}


export default Choose;