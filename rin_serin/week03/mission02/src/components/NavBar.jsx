import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-right: 20px;
`
const Buttons = styled.button`
    background-color: ${props => props.backcolor};
    width: 72px;
    height: 40px;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    &:hover {
        background-color: ${props => props.hovercolor}; 
    }
`
const Navbar = (props) => {

    return(
        <Nav>
            <Link to={'/'} style={{display:'flex', alignItems: 'center'}}>
                <img src="/public/NETFLIX_logo.png" id="Logo" style={{margin:'0 20px', height:'24px'}}/>
            </Link>
            <ButtonDiv>
                <Link to={'/login'}>
                    <Buttons backcolor={'#333333'} hovercolor={'#212121'}>로그인</Buttons>
                </Link>
                <Link to={'/signup'}>
                    <Buttons backcolor={'#EF0000'} hovercolor={'#A70000'}>회원가입</Buttons>
                </Link>
            </ButtonDiv>
        </Nav>
    )
}

export default Navbar;