import { User } from '@/common'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { HeadCell, headCells, IRootState } from './UsersList.data'

const UsersList: FC = () => {
  const users = useSelector((state: IRootState) => state.users)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell: HeadCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UsersList
