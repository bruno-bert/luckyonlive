import * as S from './styles'
import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  name: string
  label?: string
  helper?: string,
  inputRef?: any
}

const Input: React.FC<InputProps> = ({name, label, helper, inputRef, ...otherProps}) => (
  <S.Wrapper>
    {label && <label htmlFor={name}>{label}</label>}
    <input ref={inputRef} type="text" {...otherProps} />
    {helper && <p style={{marginTop: '10px'}}>{helper}</p> }
  </S.Wrapper>
)

export default Input
