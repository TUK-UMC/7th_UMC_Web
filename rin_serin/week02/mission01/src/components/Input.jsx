import React from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: ${props => props.width};
  height: 32px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #b4b4b4;
  &:focus {
        border-color: #4abdff; /* 포커스를 받았을 때의 테두리 색상 */
        outline: none; /* 포커스 테두리 제거 */
      }
`

function InputBox (props){
    //input value 값
     const {value, onChange, type, width} = props;

    return(
        <StyledInput type={type} value={value} onChange={onChange} width={width}/>
    )
};

export default InputBox;