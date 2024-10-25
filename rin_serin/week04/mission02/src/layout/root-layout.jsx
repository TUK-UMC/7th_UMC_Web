import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/SideBar";

const AllOutlet = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
`

const UnderContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    background-color: #212121;
    color: #fff;
`

const RootLayout = () => {
    return(
        <AllOutlet>
            <Navbar/>
            <UnderContent>
                <Sidebar/>
                <Outlet styled={{margin:'auto'}}/>
            </UnderContent>
        </AllOutlet>
    )
}

export default RootLayout;