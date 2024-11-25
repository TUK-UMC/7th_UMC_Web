import React from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: 100%;
  height: ${props => props.$height};
  padding: ${props => props.$padding};
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  resize: none; /* 크기 조정 방지 */
  box-sizing: border-box;
  line-height: 1.5; /* 텍스트 높이로 세로 정렬 조정 */
  &:focus {
        border-color: #4abdff; /* 포커스를 받았을 때의 테두리 색상 */
        outline: none; /* 포커스 테두리 제거 */
      }
   &::placeholder { /* placeholder 텍스트 스타일링 */
    color: #bbb;
    font-size: 14px;
    font-weight: 550;
    line-height: 1.5; /* 텍스트 높이로 세로 정렬 조정 */
  }
`

function InputBox (props){
    //input value 값
     const {value, onChange, type, placeholder, $height, $padding} = props;

    return(
        <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} $height={$height} $padding={$padding}/>
    )
};

export default InputBox;