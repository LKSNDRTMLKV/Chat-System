import React from 'react';

//npm imports
import styled, { css } from 'styled-components';

//components imports
import { Text14 } from '../Text/Text';

//styled-components
const ButtonWrapper = styled.button`
    width: 100%;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.disabled ? props.theme.dark_gray3 : props.theme.yellow};
    outline: none;
    border: none;
    border-radius: 7px;
    color: ${props => props.disabled ? props.theme.text_gray2 : props.theme.text_gray};
    &:hover{
        ${props => props.disabled ? css`
            cursor: not-allowed;        
        `: css`
            cursor: pointer;
        `}
    }
`

//component
const Button = ({ onClick, type, disabled, text }) => {
    return (
        <ButtonWrapper type={type} onClick={onClick} disabled={disabled}>
            <Text14>{text}</Text14>
        </ButtonWrapper>
    );
}

export default Button;