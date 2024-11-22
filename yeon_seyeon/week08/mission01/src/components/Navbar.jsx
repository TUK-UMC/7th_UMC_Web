// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #ff007f;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 유저 정보 불러오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      const accessToken = localStorage.getItem("AccessToken");
      if (accessToken) {
        try {
          const response = await axios.get("http://localhost:3000/auth/user", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const email = response.data.email;
          const nickname = email.split("@")[0];
          setNickname(nickname);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("유저 정보를 불러오지 못했습니다.", error);
          setIsLoggedIn(false);
        }
      }
    };
    fetchUserInfo();
  }, []);

  // 로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <NavLinks>
        {isLoggedIn ? (
          <>
            <span>안녕하세요, {nickname}님</span>
            <Button onClick={handleLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button>로그인</Button>
            </Link>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
