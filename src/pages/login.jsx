import React, { useState } from 'react';
import './login.css'; 
import { useNavigate } from 'react-router-dom';
// import './App.css';

const Login = () => {
  const [username, setUsername] = useState('Nicole');
  const [password, setPassword] = useState('Nicole123');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'Nicole' && password === 'Nicole123') {
      console.log('Login successful!');
      navigate('/portfolio'); // Redirect to portfolio page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className="input-box">
          <input 
            type="text" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <i className="bx bxs-user"></i>
        </div>
        
        <div className="input-box">
          <input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="remember-me">
          <label>
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            /> Remember me
          </label>
        </div>
        
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
