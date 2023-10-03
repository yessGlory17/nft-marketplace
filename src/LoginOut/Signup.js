import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/SignUp.css";
import axios from "axios";

const Signup = () => {
  const nav = useNavigate();
  const navLogin = () => {
    nav("/Login");
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3001/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      nav("/Login");
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Register</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label htmlFor="name" style={labelStyle}>
            <strong>Name</strong>
          </label>

          <input
            type="text"
            placeholder="Enter name"
            autoComplete="off"
            name="name"
            style={inputStyle}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
        <button style={buttonStyle}>Register</button>
      </form>
      <p style={paragraphStyle}>Already have an account?</p>

      <button onClick={navLogin} style={loginButtonStyle}>
        Login
      </button>
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
  fontSize: "2rem",
  color: "white",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputContainerStyle = {
  marginBottom: "1rem",
};

const labelStyle = {
  fontSize: "1.2rem",
  color: "white",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginBottom: "1rem",
  width: "100%",
};

const paragraphStyle = {
  fontSize: "1rem",
  color: "white",
};

const loginButtonStyle = {
  width: "15%",
  backgroundColor: "green",
  color: "white",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Signup;
