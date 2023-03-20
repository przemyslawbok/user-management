import { User } from '@/common'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { FormFieldNames, validationSchema } from './UserForm.data'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  ButtonContainer,
  Form,
  InputContainer,
  StyledInputLabel,
  StyledTextField,
} from './UserForm.styled'

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <StyledInputLabel htmlFor={FormFieldNames.Name}>Name</StyledInputLabel>
        <StyledTextField
          id={FormFieldNames.Name}
          {...register(FormFieldNames.Name)}
          error={errors.name !== undefined}
          helperText={errors.name?.message}
        />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor={FormFieldNames.Username}>
          Username
        </StyledInputLabel>
        <StyledTextField
          id={FormFieldNames.Username}
          {...register(FormFieldNames.Username)}
          error={errors.username !== undefined}
          helperText={errors.username?.message}
        />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor={FormFieldNames.Email}>
          Email
        </StyledInputLabel>
        <StyledTextField
          id={FormFieldNames.Email}
          {...register(FormFieldNames.Email)}
          error={errors.email !== undefined}
          helperText={errors.email?.message}
        />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor={FormFieldNames.City}>City</StyledInputLabel>
        <StyledTextField
          id={FormFieldNames.City}
          {...register(FormFieldNames.City)}
          error={errors.city !== undefined}
          helperText={errors.city?.message}
        />
      </InputContainer>
      <ButtonContainer>
        <Button variant="outlined">Cancel</Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </ButtonContainer>
    </Form>
  )
}

export default UserForm
