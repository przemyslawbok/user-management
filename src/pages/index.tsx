import { Layout, UsersList } from '@/features'
import { CardHeader, StyledCard } from './index.styled'
import { Button, CardContent, Typography } from '@mui/material'
import { onAddUserClick } from './index.logic'

const Home = () => {
  return (
    <Layout name="Home" description="User Management Home Page">
      <StyledCard>
        <CardContent>
          <CardHeader>
            <Typography variant="h5">User List</Typography>
            <Button variant="contained" onClick={onAddUserClick}>
              Add new
            </Button>
          </CardHeader>
          <UsersList />
        </CardContent>
      </StyledCard>
    </Layout>
  )
}

export default Home
