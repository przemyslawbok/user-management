import { TableCell, TableRow } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ITableRowProps } from './UserTableRow.data'
import { onDeleteClick, onEditClick } from './UserTableRow.logic'
import { DeleteButton, EditButton } from './UserTableRow.styled'

const UserTableRow: FC<ITableRowProps> = (props) => {
  const { user } = props

  const dispatch = useDispatch()

  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.city}</TableCell>
      <TableCell>
        <EditButton variant="contained" onClick={onEditClick(user.id)}>
          edit
        </EditButton>
      </TableCell>
      <TableCell>
        <DeleteButton
          variant="contained"
          onClick={onDeleteClick(dispatch, user)}
        >
          delete
        </DeleteButton>
      </TableCell>
    </TableRow>
  )
}

export default UserTableRow
