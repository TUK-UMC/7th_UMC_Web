import useCustomFetch from "../../hooks/useCustomFetch";
import Error from "../../components/Error";
import Card from "../../components/Card";
import * as S from "../../pages/search/Search-styled"
import { useSearchParams } from "react-router-dom";
import CardListSkeleton from "../skeleton/card-list-skeleton";

const SearchMovieList = () => {

    const [searchParams, setSearchParams] = useSearchParams({
        mq:""
    });
    const mq = searchParams.get('mq')

    const url = `/search/movie?query=${mq}&include_adult=false&language=en-US&page=1`;
    const {datas:movies, isLoading, isError} = useCustomFetch(url)
    // console.log(movies.data);

    if (isLoading) {
        return <S.MovieContainer>
            <CardListSkeleton number={20} />
        </S.MovieContainer>;
    }

    if (isError) {
        return <Error />;
    }

    if(mq && movies.results?.length === 0){
        return(
            <div style={{color:'white'}}>
                <h1>해당 검색어 {mq} 에 해당하는 데이터가 없습니다.</h1>
            </div>
        )
    }

    return(
        <S.MovieContainer>
            {movies.results?.map((movie) => (
                <Card
                    id={movie.id} 
                    key={movie.id}
                    src={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                />
            ))}
        </S.MovieContainer>
    )
}

export default SearchMovieList