import { Link } from "react-router-dom";
import styled from "styled-components";

const All= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 32px;
    gap: 16px;
    box-sizing: border-box;
`
const  Categories = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`
const Categori = styled(Link)`
    width: 100%;
    height: 160px;
    background-image: url(${props => props.backimg});
    background-position: center;
    background-size: cover;
    background-color: red;
    border-radius: 8px;
    color: #fff;
    display: flex;
    flex-direction: column-reverse;
    text-decoration: none;
`
const CategoriTitle = styled.p`
    width: fit-content; 
    margin: 0 8px 8px 8px; 
    border-radius: 4px; 
    display: inline-block;
    padding: 4px 8px;
    background-color: rgba(33, 33, 33, 0.6);
    font-weight: 700;
    white-space: nowrap;
`
const categories = [
    {
        title:"현재 상영중인",
        to: "now-playing",
        img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"인기있는",
        to: "popular",
        img: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"높은 평가를 받은",
        to: "top-rated",
        img: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title:"개봉 예정중인",
        to: "up-coming",
        img: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

const CategoriPage = () => {
    return (
        <All>
            <p style={{fontSize:'20px'}}>카테고리</p>
            <Categories>
                {categories.map((category,index) => (
                    <Categori key={index} to={`/movies/${category.to}`} backimg={category.img}>
                        <CategoriTitle>
                            {category.title}
                        </CategoriTitle>
                    </Categori>
                ))}
            </Categories>
        </All>
    );
};

export default CategoriPage;
