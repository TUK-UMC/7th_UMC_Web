import styled from "styled-components";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useState, useEffect } from "react";

const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PopularList = styled.div`
    width: 100%;
    background-color: #212121;
    padding-right: 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 20px;
`;

const PaginationControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    button {
        margin: 0 5px;
        padding: 8px 16px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:disabled {
            background-color: #555;
            cursor: not-allowed;
        }
    }

    span {
        margin: 0 10px;
        font-size: 16px;
        color: white;
    }
`;

function PopularPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    const loadMovies = async (pageNum) => {
        setIsLoading(true);
        setIsError(false);

        try {
            const data = await useGetMovies({ category: "popular", pageParam: pageNum });
            setMovies(data.results); // 이전 데이터를 덮어씌움
            setTotalPages(data.total_pages);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadMovies(page);
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    // 로딩 상태 처리
    if (isLoading) {
        return (
            <PopularList>
                <Loading />
            </PopularList>
        );
    }

    // 에러 상태 처리
    if (isError) {
        return <Error />;
    }

    return (
        <All>
            <PopularList>
                {movies.map((movie) => (
                    <Card
                        id={movie.id}
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        date={movie.release_date}
                    />
                ))}
            </PopularList>
            <PaginationControls>
                <button onClick={handlePrevPage} disabled={page === 1}>
                    이전 페이지
                </button>
                <span>
                    페이지 {page} / {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    다음 페이지
                </button>
            </PaginationControls>
        </All>
    );
}

export default PopularPage;
