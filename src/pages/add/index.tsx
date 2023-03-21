import { User } from '@/common'
import { Layout, UserForm, addUser } from '@/features'
import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { CardHeader, StyledCard } from './index.styled'

const Add = () => {
  const dispatch = useDispatch()

  const formSubmitAction = (data: User) => {
    dispatch(addUser(data))
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
