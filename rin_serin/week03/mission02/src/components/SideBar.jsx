import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { MdMovie } from "react-icons/md";

const Side = styled.div`
    background-color: #333;
    width: 160px;
    padding-top: 8px;
    
`
const Buttons = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    background-color: #333;
    border: none;
    margin-left: 20px;
    padding: 8px 0;
`

const Sidebar = () => {
    return(
        <Side>
            <Link to={'/search'}>
                <Buttons>
                    <IoSearch />
                    검색
                </Buttons>
            </Link>
            <Link to={'/categori'}>
                <Buttons>
                    <MdMovie />
                    영화
                </Buttons>
            </Link>
        </Side>
    )
}

export default Sidebar;