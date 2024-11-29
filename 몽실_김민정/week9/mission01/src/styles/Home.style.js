import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;

  & > .main-text {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 30px;
  }
`;

export const AlbumCardLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
