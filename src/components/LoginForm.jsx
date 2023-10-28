import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./common.css";
import Title from "./styles/Title.styles";

const LoginForm = () => {
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);

  return (
    <form className="form">
      <Title>Login</Title>
      {/* Login ID field */}
      <div>
        <label>Login ID</label>
        <input
          type="text"
          placeholder="Enter Login ID"
          className="input-field"
          id="loginId"
          name="loginId"
          required
        />
      </div>

      {/* Password field */}
      <div className="password-container">
        <label>Password</label>
        <input
          type={togglePasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter Your Password"
          className="input-field"
          required
        />
        <div
          onClick={() => setTogglePasswordVisible(!togglePasswordVisible)}
          className="eye-container"
        >
          {togglePasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
      </div>

      {/* Checkbox Containers */}
      <div className="checkbox-1">
        <label>
          <input type="checkbox" name="myCheckbox" id="myCheckbox" />
          Remember Me
        </label>
        <p className="cng-pass">Change Password</p>
      </div>
      <div className="checkbox-2">
        <label>
          <input type="checkbox" name="myCheckbox" id="myCheckbox" />
          Agree to <span className="span-text">Terms & Coditions</span>
        </label>
      </div>

      {/* Login button */}
      <div className="btn-container">
        <button
          className="login-btn"
          type="submit"
        >
          Login
        </button>
      </div>
      <p className="register-text">
        Don&apos;t have an account?
        <span className="span-text"> Register Here</span>
      </p>
    </form>
  );
};

export default LoginForm;
