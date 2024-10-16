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
        to={"/movies"}
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
  width: 200px;
  height: auto;
  min-height: 100vh;
  overflow: auto;
  left: 0;
  background-color: #282728;
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
  border-bottom: 3px solid #282728;

  &:hover {
    border-bottom-color: #9e9d9d;
  }
`;
