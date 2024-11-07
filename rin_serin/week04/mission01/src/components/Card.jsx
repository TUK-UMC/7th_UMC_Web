import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link, replace } from "react-router-dom";

const CardDiv = styled.button`
    margin: 10px;
    width: 160px;
    padding: 10px;
    height: fit-content;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
const MovieImg = styled.img`
    width: 160px;
    height: 240px;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out;
    filter: brightness(100%);
    
    &:hover {
      filter: brightness(50%);
    }
`
const MovieTitle = styled.h4`
    margin: 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
`
const MovieDate = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    margin: 0;
`

const Card = ({src, title, date, id}) =>{
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`movies/${id}`);
    }
    console.log(id)
    
    return(
        <CardDiv
            onClick={handleClick}
            key={id} 
        >
            <MovieImg src={"https://image.tmdb.org/t/p/original" +src} 
            // hoverOn={hoverOn}
            />
            <MovieTitle>{title}</MovieTitle>
            <MovieDate>{date}</MovieDate>
        </CardDiv>
    )
}

export default Card;