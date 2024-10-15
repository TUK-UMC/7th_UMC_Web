import styled from "styled-components";
import { Link } from "react-router-dom";

// RootLayout: 전체 레이아웃
const RootLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Navbar: 최상단 네비게이션 바
const Navbar = styled.nav`
  background-color: #202020;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

// Logo: 클릭 시 홈페이지로 이동하는 로고
const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #ff007f; /* 로고 색상 */
  text-decoration: none;
  &:hover {
    color: #ff66a3; /* hover 시 색상 변경 */
  }
`;

// NavLinks: 로그인/회원가입 버튼 그룹
const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

// 버튼 공통 스타일
const Button = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
`;

// 로그인 버튼
const LoginButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555; /* hover 시 색상 변경 */
  }
`;

// 회원가입 버튼 스타일링
const SignupButton = styled.button`
  background-color: #ff007f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff66a3; /* hover 시 색상 변경 */
  }
`;

// MainLayout: 사이드바와 콘텐츠를 가로축으로 배치
const MainLayout = styled.div`
  display: flex;
  flex: 1;
`;

// Sidebar: 사이드바 레이아웃
const Sidebar = styled.div`
  width: 200px;
  background-color: #2b2b2b;
  color: white;
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 20px 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #ff007a;
  }
`;

// Content: 메인 콘텐츠 영역
const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #121212;
  color: white;
`;

// MovieContainer: 영화 목록을 감싸는 컨테이너
const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

// MovieCardContainer: 각 영화 카드의 컨테이너
const MovieCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// MovieImage: 영화 포스터 이미지
const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Overlay: 영화 제목을 감싸는 오버레이
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MovieCardContainer}:hover & {
    opacity: 1;
  }
`;

// StyledLink: Router의 Link 컴포넌트에 스타일 적용
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
