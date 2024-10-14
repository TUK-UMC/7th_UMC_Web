import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import styled from "styled-components";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <RowDiv>
        <Sidebar />
        <Outlet />
      </RowDiv>
    </>
  );
};

const RowDiv = styled.div`
  display: flex;
`;
