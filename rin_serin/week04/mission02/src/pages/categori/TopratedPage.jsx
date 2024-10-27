import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Card from "../../components/Card";
import { axiosInstance } from "../../apis/axios-instance";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const TopratedList = styled.div`
    width: 100%;
    background-color: #212121;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 20px;
    height: fit-content;
`

function TopratedPage (){

    const {datas:movies, isLoading, isError} = useCustomFetch('/movie/top_rated?language=en-US&page=1')
    // console.log(movies);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return(
        <TopratedList>
            {movies.results?.map((movie) => (
            <Card
                id={movie.id} 
                key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
            />
        ))}
        </TopratedList>
    )
};

export default TopratedPage;