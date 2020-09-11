import styled from 'styled-components'

export const Wrapper = styled.div`

  position: relative;
  
  
  input {
    display: block;
    margin: 0;
    padding: 1.2rem 1.6rem;
    color: white;
    text-align: center;
    background-color: #363534;
    width: 100%;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: inherit;
    line-height: 1.8rem;
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow 300ms;
  }
  
  input::placeholder {
    color: #fefefe;
    font-size: 1.2rem;
    text-align: center;
  }
  
  input:focus {
    outline: none;
    border: 2px solid #FE4F60;
  }

  p {
      font-size: 1.2rem;
  }
`
