import { TableRow } from '@mui/material'
import { FC } from 'react'
import { DeleteButton } from '../DeleteButton'
import { EditButton } from '../EditButton'
import { ITabletUserTableRowProps } from './TabletUserTableRow.data'
import {
  ButtonContainer,
  IdContainer,
  PropContainer,
  StyledTableCell,
} from './TabletUserTableRow.styled'

const TabletUserTableRow: FC<ITabletUserTableRowProps> = (props) => {
  const { user } = props

  return (
    <TableRow>
      <StyledTableCell>
        <IdContainer>
          <span>ID: {user.id}</span>
        </IdContainer>
        <PropContainer>
          <span>Name: {user.name}</span>
        </PropContainer>
        <PropContainer>
          <span>Username: {user.username}</span>
        </PropContainer>
        <PropContainer>
          <span>Email: {user.email}</span>
        </PropContainer>
        <PropContainer>
          <span>City: {user.city}</span>
        </PropContainer>
        <ButtonContainer>
          <EditButton userId={user.id} />
          <DeleteButton user={user} />
        </ButtonContainer>
      </StyledTableCell>
    </TableRow>
  )
}

export default TabletUserTableRow
