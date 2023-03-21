import styled from '@emotion/styled';
import { Button, Table, TableHead } from '@mui/material';

export const StyledTable = styled(Table)`
  border: 1px solid #e0e0e0;
`

export const StyledTableHead = styled(TableHead)`
  background-color: #eeeeee;
`

export const EditButton = styled(Button)`
  background-color: orange;

  &:hover {
    background-color: orange;
  }
`

export const DeleteButton = styled(Button)`
  background-color: red;

  &:hover {
    background-color: red;
  }
`