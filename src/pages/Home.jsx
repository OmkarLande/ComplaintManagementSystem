import React, { useState } from "react";
import "./Home.css";
import welcome from "../components/Assets/welcome.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    //destructuring
    const { email, password } = login;
    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        window.alert("Logged in SuccessFully");
        window.location.href = "/aboutus";
        console.log("Logged in SuccessFully");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={welcome} id="welcome" alt="" />

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={login.email}
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            name="password"
            onChange={handleInputs}
            required
          />
          <button type="button" onClick={PostData}>
            Log In
          </button>
        </form>
        <div className="divider">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <div className="signup-link">
          Don't have an account? <NavLink to="/loginsingup">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
