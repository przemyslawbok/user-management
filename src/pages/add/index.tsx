import { User } from '@/common'
import { Layout, UserForm } from '@/features'
import { useAddUserMutation } from '@/features/users/usersSlice'
import { Typography } from '@mui/material'
import toast from 'react-hot-toast'
import { CardHeader, StyledCard } from './index.styled'

const Add = () => {
  const [addUser, { isLoading }] = useAddUserMutation()

  const formSubmitAction = async (data: User) => {
    try {
      await addUser(data).unwrap()
      if (!isLoading) toast.success('User added successfully')
    } catch (error) {
      //Logging logic here
      console.error(error)
      toast.error('Failed to add user!')
    }
  }

  return (
    <Layout name="Add User" description="User Management Add User Page">
      <StyledCard>
        <CardHeader>
          <Typography variant="h5">Add Form</Typography>
        </CardHeader>
        <UserForm formSubmitAction={formSubmitAction} isLoading={isLoading} />
      </StyledCard>
    </Layout>
  )
}

export default Add
