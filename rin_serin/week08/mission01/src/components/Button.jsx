import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.width || '100%'};
    height: 32px;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    color: ${props => props.$colorIs};
    background-color: ${props => props.$backgroundColor};
    cursor: pointer;
`

function Button (props){
    const {buttonName, onClick, type, $backgroundColor, $colorIs, width } = props;
    
    return(
        <StyledButton
        onClick={onClick}
        type={type}
        $colorIs={$colorIs}
        $backgroundColor={$backgroundColor}
        width={width}
        >
            {buttonName||null}
        </StyledButton>
    )
};

export default Button;