import { FC } from 'react'
import { IFormFieldProps } from './FormField.data'
import {
  InputContainer,
  StyledInputLabel,
  StyledTextField,
} from './FormField.styled'

const FormField: FC<IFormFieldProps> = (props) => {
  const { fieldName, label, value, register, error } = props

  return (
    <InputContainer>
      <StyledInputLabel htmlFor={fieldName}>{label}</StyledInputLabel>
      <StyledTextField
        id={fieldName}
        {...register(fieldName)}
        error={error !== undefined}
        helperText={error?.message}
        value={value}
      />
    </InputContainer>
  )
}

export default FormField
