import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Form = styled.form`
  margin: 1rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`

export const CancelButton = styled(Button)`
  border-color: red;
  color: red;

  &:hover {
    border-color: red;
  }
`

export const SubmitButton = styled(Button)`
  background-color: green;

    &:hover {
    background-color: green;
  }
`