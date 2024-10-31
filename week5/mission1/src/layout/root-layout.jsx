import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <RootContainer>
      <Navbar />
      <RowDiv>
        <Sidebar />
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
  flex-grow: 1;
  overflow-y: auto;
`;

const RowDiv = styled.div`
  display: flex;
  padding-right: 20px;
  flex-grow: 1;
`;
