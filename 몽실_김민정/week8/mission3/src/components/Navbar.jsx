import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FiAlignJustify } from "react-icons/fi";
import { getUserData } from "../apis/authAPI";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const queryClient = useQueryClient();

  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: getUserData,
  });

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.setQueryData(["userData"], null);
  };

  return (
    <Container>
      {openSidebar && <Sidebar />}
      <LeftWrapper>
        <FiAlignJustify
          size={40}
          onClick={() => setOpenSidebar(!openSidebar)}
        />
        <Logo to={"/"}>Mongsil</Logo>
      </LeftWrapper>
      <UserDiv>
        {userData ? (
          <>
            <WelcomeText>
              <strong>{userData.email}</strong> 님 반갑습니다.{" "}
            </WelcomeText>
            <LogoutLink onClick={logout}>로그아웃</LogoutLink>
          </>
        ) : (
          <>
            <SignInLink to={"/login"}>로그인</SignInLink>
            <SignUpLink to={"/signup"}>회원가입</SignUpLink>
          </>
        )}
      </UserDiv>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.gray_200};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  position: fixed;
  width: 100%;
  z-index: 1000000;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 32px;
  font-weight: 800;
`;

const UserDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const JoinButton = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
`;

const SignInLink = styled(JoinButton)`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.gray_200};

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpLink = styled(JoinButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_100};
  }
`;

const LogoutLink = styled(JoinButton)`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.gray_200};

  &:hover {
    text-decoration: underline;
  }
`;

const WelcomeText = styled.p`
  font-weight: 600;

  & > strong {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
