import * as S from './styles'

export type ButtonComponentProps = {
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
  return (
    <S.Button onClick={onClick} {...otherProps}>{children}</S.Button>
  );
}

export default ButtonComponent;
