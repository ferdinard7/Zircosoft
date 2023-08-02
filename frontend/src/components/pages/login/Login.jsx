import React from "react";
import "./login.css";


function Login() {

    function handleLogin(e) {
      e.preventDefault()
    }
    
    return (
        <div className="login-container">
        <div className="login-wrapper">
               <div className="login">
               <h1 className="logo">Zircosoft</h1>
               <h3>Sign In </h3>
               <p> Access the Zircosoft platform using your email and password.</p>
               <form className="login-form" onClick={handleLogin}>
               <h4>Email <span>*</span></h4>
               <input className="form-input" placeholder="your email" />
               <h4>Password <span>*</span></h4>
               <input className="form-input" type="password" placeholder="Password" />
               
               <p> <input type="checkbox" />  i agree to Zircosoft terms and conditions</p>

               <button className="login-button"  type="submit"> Sign Up</button>
               </form>
               <p> New to our platform?  <a href="/">Create an account</a></p>
               <small className="small"> privacy policy</small>
               <small className="small">Terms and condition</small>
               <p className="last-p">&copy; 2023. All rights reserved</p>
               </div>
               <div className="empty">
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


export default Login;