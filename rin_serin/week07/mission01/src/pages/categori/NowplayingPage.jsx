import styled from "styled-components";
import useCustomFetch from "../../hooks/useCustomFetch";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const NowplayingList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right:28px;
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
`

function NowplayingPage (props){

    const {datas:movies, isLoading, isError} = useCustomFetch('/movie/now_playing?language=en-US&page=1')
    // console.log(movies);

    if (isLoading) {
        return <NowplayingList>
            <Loading />
            </NowplayingList>;
    }

    if (isError) {
        return <Error />;
    }


    return(
        <NowplayingList>
            {movies.results?.map((movie) => (
            <Card 
                id={movie.id} 
                key={movie.id}
                src={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
            />
        ))}
        </NowplayingList>
    )
};

export default NowplayingPage;