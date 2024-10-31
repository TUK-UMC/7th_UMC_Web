import React, { useState } from "react";
import styled from "styled-components";
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

const Container = styled.div`
  padding: 30px;
  width: 10%;
  height: 100%;
  /* min-height: 100vh; */
  overflow-y: auto;
  left: 0;
  background-color: ${({ theme }) => theme.colors.gray_200};
  display: flex;
  flex-direction: column;
  gap: 30px;
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
