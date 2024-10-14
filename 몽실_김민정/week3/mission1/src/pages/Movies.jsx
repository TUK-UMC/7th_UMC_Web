import React, { useState } from "react";
import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CATEGORY = [
  {
    name: "현재 상영중인",
    image: category1,
    page: "now-playing",
  },
  {
    name: "인기있는",
    image: category2,
    page: "popular",
  },
  {
    name: "높은 평가를 받은",
    image: category3,
    page: "top-rated",
  },
  {
    name: "개봉 예정중인",
    image: category4,
    page: "up-coming",
  },
];

export const Movies = () => {
  const [hoveredCategory, setHoveredCategory] = useState(-1);
  return (
    <Container>
      <Title>카테고리</Title>
      <CategoryWrapper>
        {CATEGORY.map((category, index) => (
          <Link key={category.name} to={`/movies/${category.page}`}>
            <Category
              image={category.image}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(-1)}
              $isHover={hoveredCategory === index}
            >
              <Tag>
                <span>{category.name}</span>
              </Tag>
            </Category>
          </Link>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 35px;
`;

const Category = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 100%;
  height: 200px;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff438f;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  isolation: isolate;
  border: 3px solid #282728;

  &:hover {
    border-color: #9e9d9d;
  }
`;

const Tag = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 5px;
`;
