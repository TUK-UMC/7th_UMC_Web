import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";

const All= styled.div`
    width: 100%;
`
const Banner=styled.div`
    background-image: url(${props=>props.backImg});
    background-size: cover; /* 이미지가 요소를 꽉 채우도록 설정 */
    background-position: top; /* 이미지를 중심에 맞춤 */
    background-repeat: no-repeat; /* 이미지 반복 방지 */
    padding: 16px 20px;
    background-repeat: no-repeat;
    width: 100%;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: end;
    box-sizing: border-box;
`
const Title=styled.h2`
    font-size: 20px;
    margin:12px 0;
`
const Rate=styled.p`
    font-size: 16px;
    margin-bottom: 12px;
`
const Subtitle=styled.p`
    font-size: 16px;
    width: 40%;
`
const Actors=styled.div`
    width: 100%;
    padding: 16px 20px;
`
const People=styled.div`
    display: flex;
    flex-wrap: wrap;
    
`
const Person=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    margin: 12px;
    gap: 8px;
`

const PersonCard =({profilepath, name, character})=>{
    return(
        <Person>
            <img src={profilepath} style={{width:"120px",height:"178px",borderRadius: "4px"}}/>
            <p>{name}</p>
            <p style={{fontSize:"10px"}}>{character}</p>
        </Person>
    )
};

const MovieIdPage = () => {
    const location = useLocation();

    const params = useParams(); // URL 파라미터로 movieId 가져오기
    const { datas:moviePeople,  isLoading, isError } = useCustomFetch(`/movie/`+params.movieId+`/credits?language=ko-US&page=1`); 
    const { datas:movieDetails} = useCustomFetch(`/movie/`+params.movieId+`?language=ko-US`); 
    console.log(movieDetails)

    if (isLoading) {
        return <div>영화 상세 정보 불러오는 중...</div>;
    }

    if (isError) {
        return <div>오류가 발생했습니다.</div>;
    }

    return (
        <All>
            <Banner backImg={"https://image.tmdb.org/t/p/original"+movieDetails.backdrop_path}>
                <Title>{movieDetails.title}</Title>
                <Rate>평점 : {movieDetails.vote_average}</Rate>
                <Subtitle>{movieDetails.overview}</Subtitle>
            </Banner> 
            <Actors>
                <Title>감독 / 출연</Title>
                <People>
                    {moviePeople.cast?.map((actor)=>(
                        <PersonCard
                            key={actor.id}
                            profilepath={actor.profile_path 
                                ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                                : 'https://via.placeholder.com/300x500?text=No+Image+Available'}
                            name={actor.name}
                            character={actor.character}
                        />
                    ))}
                </People>
            </Actors> 
        </All>
    );
};

export default MovieIdPage;
