import { User } from '@/common'
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '@/features'
import { HeadCell, headCells } from './UsersList.data'
import {
  DeleteButton,
  EditButton,
  StyledTable,
  StyledTableHead,
} from './UsersList.styled'
import { onEditClick } from './UsersList.logic'

const UsersList: FC = () => {
  const users = useSelector(getAllUsers)

  return (
    <TableContainer>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            {headCells.map((headCell: HeadCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {users.map((user: User) => (
            <TableRow key={user.id}>
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
                <DeleteButton variant="contained">delete</DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default UsersList
