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

const Navbar = (props) => {

    return(
        <Nav>
            <Link to={'/'} className="styled-link">
                <img src="/public/NETFLIX_logo.png" id="Logo"/>
            </Link>
            <ButtonDiv>
                <StyledLink to={'/login'} className="button-link" backcolor={'#333333'} hovercolor={'#212121'}>
                    로그인
                </StyledLink>
                <StyledLink to={'/signup'} className="button-link" backcolor={'#EF0000'} hovercolor={'#A70000'}>
                    회원가입
                </StyledLink>
            </ButtonDiv>
        </Nav>
    )
}

export default Navbar;