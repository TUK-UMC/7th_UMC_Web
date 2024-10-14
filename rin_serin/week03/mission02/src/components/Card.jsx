import styled from "styled-components";
import { useState } from "react";

const CardDiv = styled.div`
    margin: 10px;
    width: 160px;
    padding: 10px;
    height: fit-content;
`
const MovieImg = styled.img`
    width: 160px;
    height: 240px;
    border-radius: 12px;
    transition: opacity 0.3s ease-in-out;
    filter: ${props =>(props.hoverOn ? 'brightness(50%)' : 'brightness(100%)')};
`
const MovieTitle = styled.h4`
    margin: 4px 0;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
`
const MovieDate = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    margin: 0;
`

const Card = (props) =>{
    const {src, title, date} = props
    const [hoverOn, setHoveron] = useState(null);
    // console.log(props, 'props')
    return(
        <CardDiv 
            key={props.id} 
            onMouseEnter={() => setHoveron(props)}
            onMouseLeave={() => setHoveron()}
        >
            <MovieImg src={"https://image.tmdb.org/t/p/original" +src} 
            hoverOn={hoverOn}
            />
            <MovieTitle>{title}</MovieTitle>
            <MovieDate>{date}</MovieDate>
        </CardDiv>
    )
}

export default Card;