import { TableCell, TableRow } from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteButton } from '../DeleteButton'
import { EditButton } from '../EditButton'
import { ITableRowProps } from './UserTableRow.data'

const UserTableRow: FC<ITableRowProps> = (props) => {
  const { user } = props

  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.city}</TableCell>
      <TableCell>
        <EditButton userId={user.id} />
      </TableCell>
      <TableCell>
        <DeleteButton user={user} />
      </TableCell>
    </TableRow>
  )
}

export default UserTableRow
