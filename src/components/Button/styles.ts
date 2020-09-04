import styled from 'styled-components'
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
padding: 10px 36px;
color: white;
font-size: 1.8rem;
font-weight: 700;
background-color: #FE4F60;
border: 0px;
border-radius: 3px;
appearance: none;
cursor: pointer;

&:hover {
    background-color: #FF2B3F;
}
&:focus {
   outline: none;
}

&:disabled {
    color: #8c8a89;
    background-color: #c9c6c5;
    cursor: revert;
    
}
`;
