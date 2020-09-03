import styled from 'styled-components'

export const Button = styled.button<ButtonComponentProps>`
padding: 10px 36px;
color: white;
font-size: 1.8rem;
font-weight: 700;
background-color: #F231A5;
border: 0px;
border-radius: 3px;
appearance: none;
cursor: pointer;

&:hover {
    background-color: #A50766;
}
`;
