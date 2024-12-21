import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #333;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .styled-link {
    display: flex;
    align-items: center;
  }
  img{
    margin: 0 20px;
    height: 24px;
  }
  `
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-right: 20px;

`
const StyledLink = styled(Link)`
    background-color: ${props => props.backcolor};
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${props => props.hovercolor};
    }
`; 

const UserId = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    width: fit-content;
`

const BeforeLogin=()=>{
    return(
        <ButtonDiv>
                <StyledLink to={'/login'}  backcolor={'#333333'} hovercolor={'#212121'}>
                     로그인
                </StyledLink>
                <StyledLink to={'/signup'} backcolor={'#EF0000'} hovercolor={'#A70000'}>
                     회원가입
                </StyledLink>
        </ButtonDiv>
    )
}

const AfterLogin=()=>{
    const { logout, userIdIs } = useContext(LoginContext);

    return(
        <ButtonDiv>
            <UserId>
                <b>{userIdIs}</b> 님 반갑습니다
            </UserId>
            <StyledLink to={'/'} backcolor={'#333333'} hovercolor={'#212121'}
                onClick={logout}
            >
                로그아웃
            </StyledLink>
        </ButtonDiv>
    )
}

const Navbar = () => {
    const {
        isLoggedIn
    }=useContext(LoginContext)

    return(
        <Nav>
            <Link to={'/'} className="styled-link">
                <img src="/public/NETFLIX_logo.png" id="Logo"/>
            </Link>
            {isLoggedIn ? <AfterLogin/> : <BeforeLogin/>}
        </Nav>
    )
}

export default Navbar;