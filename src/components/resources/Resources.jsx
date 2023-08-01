import React from "react";
import "./resources.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';


function Resources() {
    return (
   <div className="resources-container">
    <div className="first-resource">
        <h1>Zircosoft</h1>
        <p>Above is an alternative payment solutions company that facilitates the easy use of digital currencies for everyday transactions.</p>
    </div>
    <div className="second-resource">
        <h4>Resources</h4>
        <p className="second-resource-paragraph">Privacy policy</p>
        <p className="second-resource-paragraph">Terms and Condition</p>
        <p className="second-resource-paragraph">Academy</p>
    </div>
    <div className="third-resource">
        <h4> Contact Us </h4>
        <div className="small">
        <MailOutlineIcon />
         <small>officialabovefx@gmail.com</small>
        </div>
        <div className="small">
        <LocationOnIcon />
         <small>Hope alive, Ishior, Benin City</small>
        </div>
        <div className="small">
        <LocalPhoneIcon />
         <small>+123456789</small>
        </div>
        <div className="small">
        <InstagramIcon />
         <small>Zircosoft</small>
        </div>
    </div>
   </div>
    )
}


export default Resources;