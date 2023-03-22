import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  margin-bottom: 1rem;
`

export const IdContainer = styled(Container)`
  width: 100%;
`

export const PropContainer = styled(Container)`
  width: 50%;
`

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`