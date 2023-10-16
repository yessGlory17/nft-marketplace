import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3001/login", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data === "Success") {
        nav("/home");
      } else {
        alert("Data not found");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome Back!</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>
            <strong>Email</strong>
          </label>

          <input
            type="email"
            placeholder="Enter Your Email"
            autoComplete="off"
            name="email"
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="password" style={labelStyle}>
            <strong>Password</strong>
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={loginButtonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

// Define your CSS styles here
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const headerStyle = {
  color: "white",
  fontSize: "2rem",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputContainerStyle = {
  color: "white",
  marginBottom: "1rem",
};

const labelStyle = {
  fontSize: "1.2rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const loginButtonStyle = {
  backgroundColor: "green",
  color: "white",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Login;
