import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const GlobalStyle = styled.div`
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #000;
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  background-color: #000; 
  min-height: 100vh;
  height: auto;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  align-content: start;
  height: auto;
`;

const CategoryCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: #ffcc00;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #ff9900;
  }
`;

const Label = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

function Movies() {
  const categories = [
    { label: '현재 상영중인', image: image1, path: '/movies/now-playing' },
    { label: '인기있는', image: image2, path: '/movies/popular' },
    { label: '높은 평가를 받은', image: image3, path: '/movies/top-rated' },
    { label: '개봉 예정인', image: image4, path: '/movies/upcoming' },
  ];

  return (
    <GlobalStyle>
      <Container>
        <h1>카테고리</h1>
        <CategoryGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index} to={category.path}>
              <img
                src={category.image}
                alt={category.label}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
              <Label>{category.label}</Label>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Container>
    </GlobalStyle>
  );
}

export default Movies;
