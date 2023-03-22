import styled from '@emotion/styled';
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export const StyledDialogTitle = styled(DialogTitle)`
  border-bottom: 1px solid #e0e0e0;
`

export const StyledDialogContent = styled(DialogContent)`
  // Used !important because of MUI padding issue
  // https://stackoverflow.com/questions/70350008/issue-with-mui-5-dialogcontent-padding
  padding: 1.25rem 1.5rem !important;
  border-bottom: 1px solid #e0e0e0;
`

export const StyledDialogActions = styled(DialogActions)`
  padding: 1rem 1.5rem;
`

export const CancelButton = styled(Button)`
  background-color: grey;

  &:hover {
    background-color: grey;
  }
`

export const DeleteButton = styled(Button)`
  background-color: red;

  &:hover {
    background-color: red;
  }
`