import styled from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import Card from "../components/Card";

const HomeList = styled.div`
    width: 100%;
    background-color: #212121;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 20px;
    height: fit-content;
`

function HomePage (){

    const {datas:movies, isLoading, isError} = useCustomFetch('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
    // console.log(movies);

    if(isLoading) {
        return <div>
            <h1 style={{margin:'10px 10px'}}>영화를 불러오는 중입니다...</h1>
        </div>
    }
    if(isError) {
        return <div>
            <h1 style={{margin:'10px 10px'}}>에러</h1>
        </div>
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