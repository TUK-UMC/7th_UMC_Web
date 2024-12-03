import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/Card";
import Loading from "../components/Loading";
import Error from "../components/Error";

const HomeList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right:28px;
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
`

function HomePage (){

    const {datas:movies, isLoading, isError} = useCustomFetch('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    // console.log(movies);

    if (isLoading) {
        return <HomeList><Loading /></HomeList>;
    }

    if (isError) {
        return <Error />;
    }

    return(
        <HomeList>
            {movies.results?.map((movie) => (
            <Card
                id={movie.id} 
                key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
            />
        ))}
        </HomeList>
    )
};

export default HomePage;