import React from "react";
import "./register.css";


function Register() {

    function handleRegister(e) {
        e.preventDefault()
      }
    
      
    return (
    <div className="register-container">
        <div className="register-wrapper">
               <div className="register">
               <h1 className="logo">Zircosoft</h1>
               <h3>Sign Up</h3>
               <p> Create a new account</p>
               <form className="register-form" onClick={handleRegister}>
               <h4>Name <span>*</span></h4>
               <input className="form-input" placeholder="your name" />
               <h4>Email <span>*</span></h4>
               <input className="form-input" placeholder="your email" />
               <h4>Phone <span>*</span></h4>
               <input  className="form-input"type="text" placeholder="your number" />
               <h4>Password <span>*</span></h4>
               <input className="form-input" type="password" placeholder="Password" />
               
               <p> <input type="checkbox" />  i agree to Zircosoft terms and conditions</p>

               <button className="register-button"  type="submit"> Sign Up</button>
               </form>
               <p> Already have an account? <a href="/">Login instead</a></p>
               <small className="small"> privacy policy</small>
               <small className="small">Terms and condition</small>
               <p className="last-p">&copy; 2023. All rights reserved</p>
               </div>
               <div className="register-empty">
                <div className="first-empty">
                  {/* first */}
                </div>
                <div className="second-empty">
                    {/* second */}
                </div>
                <div className="third-empty">
                    {/* third */}
                </div>
               </div>
        </div>
        
    </div>
    )
}


export default Register;