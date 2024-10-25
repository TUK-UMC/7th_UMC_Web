import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import { useState } from "react";

const All= styled.div`
    width: 100%;
`
const Banner=styled.div`
    background-image: url(${props=>props.backImg});
    padding: 16px 20px;
    background-repeat: no-repeat;
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const Title=styled.h2`
    font-size: 20px;
`
const Rate=styled.p`
    font-size: 16px;
`
const Subtitle=styled.p`
    font-size: 16px;
`
const Actors=styled.div`
    width: 100%;
    padding: 16px 20px;
`
const People=styled.div`
    display: flex;
`
const Person=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MovieIdPage = (props) => {
    const location = useLocation();

    const movieId = useParams(); // URL 파라미터로 movieId 가져오기
    console.log(movieId);
    const { datas:movieDetails,  isLoading, isError } = useCustomFetch(`/movie/${props.id}/credits?language=ko-US&page=1`); 
    console.log(movieDetails)
    // const [movie, setMovie]= useState({
    //     id:0,
    //     title:'qwer',
    // })

    // if (isLoading) {
    //     return <div>영화 상세 정보 불러오는 중...</div>;
    // }

    // if (isError) {
    //     return <div>오류가 발생했습니다.</div>;
    // }

    return (
        <All key={props.id}>
            <p>현재 페이지는 {props.id}입니다</p>
            {/* <Banner backImg={"#"}>
                <Title>{movie.title}</Title>
                <Rate>{movie.vote_average}</Rate>
                <Subtitle>{movie.overview}</Subtitle>
            </Banner>
            <Actors>
                <Title>감독 / 출연</Title>
                <People></People>
            </Actors> */}
        </All>
    );
};

export default MovieIdPage;
