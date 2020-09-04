import * as S from './styles'
import {InputHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  name: string
  label?: string
  helper?: string
}

const Input: React.FC<InputProps> = ({name, label, helper, ...otherProps}) => (
  <S.Wrapper>
    {label && <label htmlFor={name}>{label}</label>}
    <input type="text" {...otherProps} />
    {helper && <p style={{marginTop: '10px'}}>{helper}</p> }
  </S.Wrapper>
)

export default Input
