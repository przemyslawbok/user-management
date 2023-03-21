import styled from '@emotion/styled'
import { InputLabel, TextField } from '@mui/material'

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`

export const StyledInputLabel = styled(InputLabel)`
  margin-right: 1rem;
`

export const StyledTextField = styled(TextField)`
  width: 600px;
`