import "../../styles/login.css";
import logo from "../../assets/icons/logo.svg";

import { FaUser, FaLock } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <img src={logo} alt="Jeevanrekha Logo" />
        </div>

        {/* Heading */}
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        {/* Username */}
        <div className="login-field">
          <label>Username</label>
          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
        </div>

        {/* Password */}
        <div className="login-field">
          <label>Password</label>
          <div className="input-group">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
            <span className="eye-icon">
              <AiOutlineEye />
            </span>
          </div>
        </div>

        {/* Login Button */}
        <button className="login-btn">Login</button>

        {/* Footer Text */}
        <p className="login-footer">
          Having trouble logging in? Please contact the{" "}
          <span>administrator</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
