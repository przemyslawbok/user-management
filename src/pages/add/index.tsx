import { Layout } from '@/features'
import { UserForm } from '@/features/users/components'
import { Typography } from '@mui/material'
import { CardHeader, StyledCard } from './index.styled'

const Add = () => {
  return (
    <Layout name="Add User" description="User Management Add User Page">
      <StyledCard>
        <CardHeader>
          <Typography variant="h5">Add Form</Typography>
        </CardHeader>
        <UserForm />
      </StyledCard>
    </Layout>
  )
}

export default Add
