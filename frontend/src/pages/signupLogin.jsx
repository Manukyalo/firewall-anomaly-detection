import React, { useState } from "react";
import { useAuthStore } from "../Store/useAuthstore.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./auth.css";

const signupLogin =()=>{
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, login, isSigningUp, isLoggingIn } = useAuthStore();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    if (!isLogin && !formData.fullName.trim())
      return toast.error("Full name is required");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      if (isLogin) {
        // Handle login
        login({ email: formData.email, password: formData.password })
          .then((success) => {
            if (success) {
              // Navigate to homepage after successful login
              navigate("/"); // This will redirect to the homepage
            }
          })
          .catch((error) => {
            console.error("Login failed:", error);
          });
      } else {
        // Handle signup
        signup(formData).then(() => navigate("/"));
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-heading">{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="signupName">Name:</label>
              <input
                type="text"
                id="signupName"
                name="signupName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor={isLogin ? "loginEmail" : "signupEmail"}>
              Email:
            </label>
            <input
              type="email"
              id={isLogin ? "loginEmail" : "signupEmail"}
              name={isLogin ? "loginEmail" : "signupEmail"}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor={isLogin ? "loginPassword" : "signupPassword"}>
              Password:
            </label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id={isLogin ? "loginPassword" : "signupPassword"}
                name={isLogin ? "loginPassword" : "signupPassword"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="auth-btn"
            disabled={isLogin ? isLoggingIn : isSigningUp}
          >
            {isLogin
              ? isLoggingIn
                ? "Logging In..."
                : "Login"
              : isSigningUp
              ? "Signing Up..."
              : "Signup"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default signupLogin;