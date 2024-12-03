import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const PopularList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right:28px;
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
`

function PopularPage (){

    const {datas:movies, isLoading, isError} = useCustomFetch('/movie/popular?language=en-US&page=1')
    // console.log(movies);

    if (isLoading) {
        
        return <PopularList>
            <Loading />
        </PopularList>;
    }

    if (isError) {
        return <Error />;
    }

    return(
        <PopularList>
            {movies.results?.map((movie) => (
            <Card
                id={movie.id} 
                key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
            />
        ))}
        </PopularList>
    )
};

export default PopularPage;