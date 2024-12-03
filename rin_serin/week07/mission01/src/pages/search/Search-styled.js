import styled from "styled-components";

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 12px;
  
  button {
    width: 5em;
    height: 40px;
    border-radius: 4px;
    background-color: #EF0000;
    color: #fff;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
`;

const MovieContainer = styled.div`
    width: 100%;
    padding-right:20px;
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
`;

export { SearchContainer, MovieContainer };