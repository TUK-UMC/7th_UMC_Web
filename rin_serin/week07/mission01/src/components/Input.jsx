import styled from "styled-components";

const InputBox = styled.input`
    width: 100%;
    min-width: 200px;
    height: 40px;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    padding: 0 8px;
    outline: none;
    :focus {
        outline: 2px solid red;
    }
`;

export default InputBox;