import styled from 'styled-components'

export const Wrapper = styled.main`
  
 
 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  
  & > * {
    margin-top: 4rem; 
  }



`



export const Title = styled.h1`
  font-size: 5.6rem;
  line-height: 7rem;

  @media (max-width: 600px){
    font-size: 5rem;
    line-height: 5rem;
  }
 
`

export const Instrution = styled.p`
  font-weight: 300;
    color: black;
    background-color: #ffd2d6;
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    margin: 2rem auto;
`

export const Description = styled.div`
  font-size: 2rem;
  font-weight: 500;
  
  
`

