import { User } from '@/common'
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { FC, useEffect } from 'react'
import { StyledTable } from './UsersList.styled'
import { Loader, useGetUsersQuery } from '@/features'
import toast from 'react-hot-toast'
import { TableHeader, UserTableRow } from './components'

const UsersList: FC = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery()

  useEffect(() => {
    if (isError) {
      //Logging logic here
      console.error(error)
      toast.error('Failed to get user data')
    }
  }, [isError, error])

  return (
    <TableContainer>
      <StyledTable>
        <TableHeader />
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={7}>
                <Loader />
              </TableCell>
            </TableRow>
          )}
          {!isLoading &&
            users &&
            users?.map((user: User) => (
              <UserTableRow key={user.id} user={user} />
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default UsersList
