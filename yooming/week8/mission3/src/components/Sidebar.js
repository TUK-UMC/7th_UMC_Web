import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaFilm } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 80px; /* Navbar 아래에 위치 */
  left: 0;
  width: 200px;
  height: calc(100vh - 60px); /* Navbar 높이를 제외한 화면 전체 */
  background-color: #1c1c1c;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  z-index: 1000; /* ContentArea 위로 나오게 */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 20px; /* 확인 후 적절한 크기로 조정 */
  line-height: 1.5; /* 줄 높이를 충분히 크게 설정 */
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #e91e63;
  }
`;


function Sidebar() {
  return (
    <SidebarContainer>
      <StyledLink to="/search">
        <FaSearch />
        찾기
      </StyledLink>
      <StyledLink to="/movies">
        <FaFilm />
        영화
      </StyledLink>
    </SidebarContainer>
  );
}

export default Sidebar;
