import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <RootContainer>
      <Navbar />
      <RowDiv>
        <ContentArea>
          <Outlet />
        </ContentArea>
      </RowDiv>
    </RootContainer>
  );
};

const RootContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  padding: 100px 30px;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

const RowDiv = styled.div`
  display: flex;
  flex-grow: 1;
`;
