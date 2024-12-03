import styled from "styled-components";
import InputBox from "../../components/Input";
import * as S from "../../pages/search/Search-styled"
import SearchMovieList from "../../components/movie/search-movie-list";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";

const All= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams({
        mq:""
    });
    const mq = searchParams.get('mq')

    // 디바운스된 검색어 상태 생성
    const debouncedSearchValue = useDebounce(searchValue, 500);

    // 디바운스된 값으로 URL을 업데이트하여 SearchMovieList에서 사용
    useEffect(() => {
        if (debouncedSearchValue) {
            setSearchParams({ mq: debouncedSearchValue });
        }
    }, [debouncedSearchValue, setSearchParams]);


    const onChangeSearchValue = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`)
    }

    const handleSearchMovieWithKeyboard= (e) => {
        if(e.key === 'Enter'){
            handleSearchMovie();
        }
    }

    return (
        <All>
            <S.SearchContainer>
                <InputBox
                    placeholder="영화를 검색해보세요"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                />
                <button
                    onClick={handleSearchMovie}
                >검색</button>
            </S.SearchContainer>
            <SearchMovieList/>
        </All>
    );
};

export default SearchPage;
