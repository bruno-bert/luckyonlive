import styled from 'styled-components'

export const Wrapper = styled.main`
  
  color: #fff;
 
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-top: 5rem;
  } 

`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.div`
  font-size: 2rem;
  font-weight: 400;
  line-height:3rem;

  p{
    font-size: 1.3rem;
  }

  
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
