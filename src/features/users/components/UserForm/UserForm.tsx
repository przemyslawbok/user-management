import { Button, TextField } from '@mui/material'
import {
  ButtonContainer,
  Form,
  InputContainer,
  StyledInputLabel,
  StyledTextField,
} from './UserForm.styled'

const UserForm = () => {
  return (
    <Form>
      <InputContainer>
        <StyledInputLabel htmlFor="name">Name</StyledInputLabel>
        <StyledTextField id="name" />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor="username">Username</StyledInputLabel>
        <StyledTextField id="username" />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
        <StyledTextField id="email" />
      </InputContainer>
      <InputContainer>
        <StyledInputLabel htmlFor="city">City</StyledInputLabel>
        <StyledTextField id="city" />
      </InputContainer>
      <ButtonContainer>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Submit</Button>
      </ButtonContainer>
    </Form>
  )
}

export default UserForm
