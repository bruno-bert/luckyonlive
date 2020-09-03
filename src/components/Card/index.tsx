import * as S from './styles'

type CardProps = {
  children?: HTMLCollection | string,
  description: string
}

const Card = ({description, children}: CardProps) => (
  <S.Wrapper>
    <h3>{description}</h3>
    {children}
  </S.Wrapper>
)

export default Card
