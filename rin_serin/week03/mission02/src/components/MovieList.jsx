import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";

const MovieListDiv = styled.div`
    width: 100%;
    background-color: #212121;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 20px;
    height: fit-content;
    /* justify-content: space-between;
    &::after {
    content: '';
    flex: auto; 
  } */
`

function MovieList (props){
    const [movies, setMovies] = useState([]);
    const {movieUrl, movieAutho} = props;

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get(movieUrl, {
                headers: {
                    Authorization: `Bearer ${movieAutho}`,
                },
                params: {
                    language: 'ko-KR', // 한국어를 요청하는 파라미터 추가
                },
            })
            setMovies(response);
        }
        getMovies()
    }, []);

    console.log(movies);

    return(
        <MovieListDiv>
            {movies.data?.results.map((movie)=>(
                <Card key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                />
            ))}
        </MovieListDiv>
    )
};

export default MovieList;