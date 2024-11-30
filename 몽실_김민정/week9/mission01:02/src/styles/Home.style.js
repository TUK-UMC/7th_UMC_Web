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

export const Seperator = styled.hr`
  background-color: gray;
  margin-top: 50px;
  width: 100%;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 7px;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteAllButton = styled.button`
  padding: 10px;
  border: 1px solid red;
  color: red;
  border-radius: 7px;
  cursor: pointer;
  background-color: white;
  &:hover {
    text-decoration: underline;
  }
`;
