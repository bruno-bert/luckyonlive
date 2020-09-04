import * as S from './styles'

export type ButtonProps = {
  children?: HTMLCollection | string,
  onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({ onClick, children, ...otherProps }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} {...otherProps}>{children}</S.Button>
  );
}

export default ButtonComponent;
