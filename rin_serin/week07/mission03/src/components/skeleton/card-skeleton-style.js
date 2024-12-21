import styled, {keyframes} from "styled-components";

const skeleton = keyframes`
    0%{
        opacity: 1;
    }
    30%{
        opacity: 0.7;
    }
    50%{
        opacity: 0.4;
    }
    80%{
        opacity: 0.8;
    }
    100%{
        opacity: 1;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    margin: 10px;
    padding: 10px;
`
export const CardMain = styled.div`
    width: 160px;
    height: 240px;
    background-color: #eee;
    border-radius: 12px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

export const TextWrapper= styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const TitleBox = styled.div`
    width: 160px;
    height: 24px;
    background-color: #eee;
    border-radius: 4px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

export const DescriptionBox = styled.div`
    width: 160px;
    height: 10px;
    background-color: #eee;
    border-radius: 4px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

// export default {Container, CardMain, TextWrapper, TitleBox, DescriptionBox}