import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1f1f1f;
  z-index: 1000; /* Navbar가 다른 요소 위에 오도록 설정 */
`;

const Logo = styled.h1`
  color: #ff0055;
  cursor: pointer;

  &:hover {
    color: #ff3366;
  }
`;

const Button = styled(Link)`
  margin: 0 10px;
  padding: 10px 15px;
  color: white;
  background-color: #ff3366;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0055;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>YONGCHA</Link>
      </Logo>
      <div>
        <Button to="/login">로그인</Button>
        <Button to="/signup">회원가입</Button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
