import { Breakpoints } from '@/common'
import styled from '@emotion/styled'
import { InputLabel, TextField } from '@mui/material'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 1rem;

  @media screen and (min-width: ${`${Breakpoints.Mobile}px`}) {
    flex-direction: row;  
    justify-content: space-between;
    align-items: center;
  }
`

export const StyledInputLabel = styled(InputLabel)`
  margin-right: 1rem;
`

export const StyledTextField = styled(TextField)`
  width: 100%;

  @media screen and (min-width: ${`${Breakpoints.Mobile}px`}) {
    width: 600px;  
  }
`
