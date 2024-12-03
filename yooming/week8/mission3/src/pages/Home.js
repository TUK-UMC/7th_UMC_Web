import React from 'react';
import styled from 'styled-components';
import SectionComponent from './SectionComponent';

const Container = styled.div`
  padding: 20px;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

function Home() {
  return (
    <Container>
      <SectionComponent title="현재 상영중인 영화" endpoint="now_playing" morePage="/movies/now-playing" />
      <SectionComponent title="인기 있는 영화" endpoint="popular" morePage="/movies/popular" />
      <SectionComponent title="높은 평가를 받은 영화" endpoint="top_rated" morePage="/movies/top-rated" />
      <SectionComponent title="개봉 예정인 영화" endpoint="upcoming" morePage="/movies/upcoming" />
    </Container>
  );
}

export default Home;
