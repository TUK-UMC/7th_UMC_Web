import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  color: #212121;
  padding: 16px 0 ;
  margin: 0;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

const Content = styled.p`
  font-size: 16px;
  color: #212121;
  margin: 0;
  padding: 20px 0;
  min-height: 200px;
  width: 100%;
`;

const Date = styled.p`
  font-size: 12px;
  color: #757575;
  display: flex;
  flex-direction: row-reverse;
`

const BackButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #212121;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* width: 100px; */

  &:hover {
    background-color: #4abdff;
    color: #fff;
  }
`;

export{Title,Content, Date, BackButton }