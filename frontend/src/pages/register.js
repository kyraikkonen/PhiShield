import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created! Please log in.");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Welcome to PhiShield</h2>
        <p>Create your account to start protecting against phishing attacks.</p>

        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>

        <p className="signin-text">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
