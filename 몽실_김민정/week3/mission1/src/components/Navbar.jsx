import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Logo to={"/"}>Mongsil</Logo>
      <UserDiv>
        <SignInLink to={"/login"}>로그인</SignInLink>
        <SignUpLink to={"/signup"}>회원가입</SignUpLink>
      </UserDiv>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  background-color: #282728;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

const Logo = styled(Link)`
  color: #ff438f;
  text-decoration: none;
  font-size: 32px;
  font-weight: 800;
`;

const UserDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const SignInLink = styled(Link)`
  width: 60px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  background-color: #282728;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  background-color: #ff438f;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #da3376;
  }
`;
