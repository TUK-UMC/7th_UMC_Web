import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #141414;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 10px;
    font-size: 18px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1 style={{ color: "white" }}>MovieApp</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
