import { User } from '@/common'
import { getAllUsers, Layout, UserForm } from '@/features'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { CardHeader, StyledCard } from './[id].styled'

const Edit = () => {
  const router = useRouter()
  const users = useSelector(getAllUsers)

  const { id } = router.query

  const user = users.find((user) => user.id === Number(id))

  const formSubmitAction = (data: User) => {
    //dispatch(addUser(data))
  }

  return (
    <Layout name="Edit User" description="User Management Edit User Page">
      <StyledCard>
        <CardHeader>
          <Typography variant="h5">Edit Form</Typography>
        </CardHeader>
        <UserForm user={user} formSubmitAction={formSubmitAction} />
      </StyledCard>
    </Layout>
  )
}

export default Edit
