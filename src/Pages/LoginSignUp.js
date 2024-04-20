import React from "react";
import "./CSS/LoginSignUp.css"
const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="ls-containeer">
        <h1>Sign Up</h1>
        <div className="ls-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="ls-login">
          Already have an account?<span>Login Here</span>
        </p>
        <div className="ls-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
