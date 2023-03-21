import { User } from '@/common'
import { Layout } from '@/features'
import { UserForm } from '@/features/users/components'
import { addUser } from '@/features/users/usersSlice'
import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { CardHeader, StyledCard } from './index.styled'

const Add = () => {
  const dispatch = useDispatch()

  const formSubmitAction = (data: User) => {
    dispatch(
      addUser({
        ...data,
        id: 3,
      })
    )
  }

  return (
    <Layout name="Add User" description="User Management Add User Page">
      <StyledCard>
        <CardHeader>
          <Typography variant="h5">Add Form</Typography>
        </CardHeader>
        <UserForm formSubmitAction={formSubmitAction} />
      </StyledCard>
    </Layout>
  )
}

export default Add
