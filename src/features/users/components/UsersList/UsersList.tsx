import { User } from '@/common'
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { FC } from 'react'
import { HeadCell, headCells } from './UsersList.data'
import {
  DeleteButton,
  EditButton,
  StyledTable,
  StyledTableHead,
} from './UsersList.styled'
import { onDeleteClick, onEditClick } from './UsersList.logic'
import { Loader, useGetUsersQuery } from '@/features'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const UsersList: FC = () => {
  const dispatch = useDispatch()

  const { data: users, isLoading, isError, error } = useGetUsersQuery()

  if (isError) {
    //Logging logic here
    console.error(error)
    toast.error('Failed to get user data')
  }

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
          {isLoading && (
            <TableRow>
              <TableCell colSpan={7}>
                <Loader />
              </TableCell>
            </TableRow>
          )}
          {!isLoading &&
            users?.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>
                  <EditButton
                    variant="contained"
                    onClick={onEditClick(user.id)}
                  >
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
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default UsersList
