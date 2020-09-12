import * as S from './styles'
import {InputHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
  name: string
  label?: string
  helper?: string
  helperPosition: "top" | "bottom" 
}


const Input = ({name, label, helper,helperPosition, ...otherProps}: InputProps) => (
  <S.Wrapper >
    {label && <label htmlFor={name}>{label}</label>}
    {helper && helperPosition=="top" && <p style={{marginTop: '10px'}}>{helper}</p> }
    <input type="text" {...otherProps} />
    {helper && helperPosition=="bottom" && <p style={{marginTop: '10px'}}>{helper}</p> }
  </S.Wrapper>
)


Input.defaultProps  = {
  helperPosition: "bottom"
}

export default Input
