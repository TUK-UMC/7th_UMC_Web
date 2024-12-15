import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <Container>
      <MenuLink
        to={"/search"}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(-1)}
        $isHover={hoveredIndex === 0}
      >
        <FaSearch color='white' />
        찾기
      </MenuLink>
      <MenuLink
        to={"/category"}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(-1)}
        $isHover={hoveredIndex === 1}
      >
        <MdMovie color='white' />
        영화
      </MenuLink>
    </Container>
  );
};

const slideInLeft = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 30px;
  top: 70px;
  left: 0px;
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray_200};
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: fixed;
  animation: ${slideInLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const MenuLink = styled(Link)`
  color: white;
  padding: 5px 2px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gray_200};

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.gray_100};
  }
`;
