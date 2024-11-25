import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Card from "../../components/Card";
import { axiosInstance } from "../../apis/axios-instance";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const UpcomingList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right:28px; 
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
`

function UpcomingPage (){

    const {datas:movies, isLoading, isError} = useCustomFetch('/movie/upcoming?language=en-US&page=1')
    // console.log(movies);

    if (isLoading) {
        return <UpcomingList><Loading /></UpcomingList>;
    }

    if (isError) {
        return <Error />;
    }

    return(
        <UpcomingList>
            {movies.results?.map((movie) => (
            <Card
                id={movie.id}
                key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
            />
        ))}
        </UpcomingList>
    )
};

export default UpcomingPage;