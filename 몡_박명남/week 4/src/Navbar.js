import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="navbar">
      <h1>YONGCHA</h1>
      <div className="navbar-buttons">
        <button className="login-button" onClick={handleLoginClick}>로그인</button>
        <button className="signup-button" onClick={handleSignupClick}>회원가입</button>
      </div>
    </nav>
  );
}

export default Navbar;
