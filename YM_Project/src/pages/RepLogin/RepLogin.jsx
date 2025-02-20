import React from "react";
import "./RepLogin.css";
import logo from "../../Image/rep.png";

const Login = () => {
  return (
    <>

      <div className="full">
        <form>
          <h1>Welcome back!</h1>
          <h3>Enter your Credentials to access your account</h3>

          <h2>Email Address</h2>
          <div className="input-box">
            <input type="email" required placeholder="Enter your email" />
          </div>

          <h2>Password</h2>
          <div className="input-box">
            <input type="password" required placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <div className="logo-container">
          <img src={logo} alt="Rep Image" />
        </div>
      </div>
    </>
  );
};

export default Login;
