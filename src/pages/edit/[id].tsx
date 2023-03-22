import { User } from '@/common'
import {
  Layout,
  Loader,
  useGetUserByIdQuery,
  UserForm,
  useUpdateUserMutation,
} from '@/features'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { CardHeader, StyledCard } from './[id].styled'

const Edit = () => {
  const router = useRouter()

  const { id } = router.query

  const { data: user, isLoading: isGetUserByIdLoading } = useGetUserByIdQuery({
    id: Number(id),
  })

  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserMutation()

  const formSubmitAction = async (data: User) => {
    const updatedUser = {
      ...data,
      id: Number(id),
    }

    try {
      await updateUser(updatedUser).unwrap()
      if (!isUpdateUserLoading) toast.success('User updated successfully')
    } catch (error) {
      //Logging logic here
      console.error(error)
      toast.error('Failed to update user!')
    }
  }

  return (
    <Layout name="Edit User" description="User Management Edit User Page">
      <StyledCard>
        <CardHeader>
          <Typography variant="h5">Edit Form</Typography>
        </CardHeader>
        {isGetUserByIdLoading && <Loader />}
        {!isGetUserByIdLoading && (
          <UserForm
            user={user}
            formSubmitAction={formSubmitAction}
            isLoading={isUpdateUserLoading}
          />
        )}
      </StyledCard>
    </Layout>
  )
}

export default Edit
