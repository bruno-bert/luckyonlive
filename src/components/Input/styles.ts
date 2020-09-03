import styled from 'styled-components'

export const Wrapper = styled.div`

  position: relative;
  
  
  input {
    display: block;
    margin: 0;
    padding: 0.8rem 1.6rem;
    color: #06092b;
    width: 100%;
    font-family: inherit;
    font-size: 2.1rem;
    font-weight: inherit;
    line-height: 1.8rem;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
  }
  
  input::placeholder {
    color: #B0BEC5;
  }
  
  input:focus {
    outline: none;
    box-shadow: 0.2rem 0.2rem 1.0rem #5e35b1;
  }

  p {
      font-size: 1.6rem;
  }
`
