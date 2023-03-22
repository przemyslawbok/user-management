import { Breakpoints, User } from '@/common'
import { TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { FC, useEffect } from 'react'
import { StyledTable } from './UsersList.styled'
import { Loader, useGetUsersQuery } from '@/features'
import toast from 'react-hot-toast'
import { TableHeader, UserTableRow } from './components'
import { useDetectScreenSize } from '@/utils'
import { TabletUserTableRow } from './components'

const UsersList: FC = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery()
  const width = useDetectScreenSize()

  useEffect(() => {
    if (isError) {
      //Logging logic here
      console.error(error)
      toast.error('Failed to get user data')
    }
  }, [isError, error])

  const isDesktop = width >= Breakpoints.Tablet

  const colspan = isDesktop ? 7 : 1

  const getRows = () => {
    const renderRows = !isLoading && users

    return (
      renderRows &&
      users?.map((user: User) =>
        isDesktop ? (
          <UserTableRow key={user.id} user={user} />
        ) : (
          <TabletUserTableRow key={user.id} user={user} />
        )
      )
    )
  }

  return (
    <TableContainer>
      <StyledTable>
        {isDesktop && <TableHeader />}
        <TableBody>
          {isLoading && (
            <TableRow>
              <TableCell colSpan={colspan}>
                <Loader />
              </TableCell>
            </TableRow>
          )}
          {getRows()}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default UsersList
