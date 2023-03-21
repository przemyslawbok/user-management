import { User } from '@/common'
import { Layout, UserForm } from '@/features'
import { useAddUserMutation } from '@/features/users/usersSlice'
import { Typography } from '@mui/material'
import { CardHeader, StyledCard } from './index.styled'

const Add = () => {
  const [addUser, { isLoading }] = useAddUserMutation()

  const formSubmitAction = (data: User) => {
    addUser(data)
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
