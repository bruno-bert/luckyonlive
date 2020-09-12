import * as S from './styles'


export type HeroProps = {
  children?: React.ReactNode | HTMLCollection | string
}

const Hero = ({children}: HeroProps) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

export default Hero
