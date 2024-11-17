import styled from "styled-components";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useGetInfiniteMovies } from "../../hooks/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader"
import CardListSkeleton from "../../components/skeleton/card-list-skeleton";
import { useEffect } from "react";

const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const TopratedList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right:28px;
    background-color: #212121;
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`

function TopratedPage (){

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetching,
    } = useGetInfiniteMovies("top_rated");

    const { ref, inView } = useInView({
        threshold: 0,
    });


    // inView가 true일 때 fetchNextPage 호출
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);


    // 데이터 로딩 상태
    if (isLoading) {
        return (
            <TopratedList>
                <Loading />
            </TopratedList>
        );
    }

    // 에러 상태 처리
    if (isError) {
        return <Error />;
    }

    // 데이터 병합
    const movies = data?.pages?.flatMap((page) => page.results) || [];

    return(
        <All>
            <TopratedList>
                {movies.map((movie) => (
                <Card
                    id={movie.id} 
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                    date={movie.release_date}
                />
            ))}
            {hasNextPage && <CardListSkeleton number={20}/>}
            </TopratedList>
            <div ref={ref} style={{display:"flex", justifyContent:"center", height:"60px", width:"100%"}}>
            {hasNextPage &&
                    <ClipLoader color="FFF"/>}
            </div>
        </All>
    )
};

export default TopratedPage;