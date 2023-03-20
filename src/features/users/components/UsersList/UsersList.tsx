import { User } from '@/common'
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { HeadCell, headCells, IRootState } from './UsersList.data'
import { StyledTable, StyledTableHead } from './UsersList.styled'

const UsersList: FC = () => {
  const users = useSelector((state: IRootState) => state.users)

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
                <Button variant="contained">edit</Button>
              </TableCell>
              <TableCell>
                <Button variant="contained">delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default UsersList
