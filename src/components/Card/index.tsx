import * as S from './styles'

export type CardProps = {
  children?: HTMLCollection | string,
  description: string
}

const Card = ({description, children}: CardProps) => (
  <S.Wrapper>
    <h3>{description}</h3>
    <p>{children}</p>
  </S.Wrapper>
)

export default Card
