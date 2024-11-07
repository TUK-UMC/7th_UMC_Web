import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 80px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    margin-left: 8px;
`

function Button (props){
    const {buttonName, onClick, type, backgroundColor} = props;
    
    return(
        <StyledButton
        onClick={onClick}
        type={type}
        backgroundColor={backgroundColor}>
            {buttonName||null}
        </StyledButton>
    )
};

export default Button;