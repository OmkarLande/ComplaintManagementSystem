import React, { useState } from 'react';
import "./Home.css"
import welcome from "../components/Assets/welcome.jpg"

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically perform authentication logic.
    // For simplicity, we'll just display the entered username and password.
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        
      <img src={welcome} id="welcome" alt="" />

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="divider">
          <span className="line"></span>
          <span className="or">OR</span>
          <span className="line"></span>
        </div>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
