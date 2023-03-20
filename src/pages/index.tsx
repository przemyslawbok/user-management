import { Layout, UsersList } from '@/features'
import { CardHeader } from './index.styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { addUserClick } from './index.logic'

const Home = () => {
  return (
    <Layout name="Home" description="User Management Home Page">
      <Card>
        <CardContent>
          <CardHeader>
            <Typography variant="h5">User List</Typography>
            <Button variant="contained" onClick={addUserClick}>
              Add new
            </Button>
          </CardHeader>
          <UsersList />
        </CardContent>
      </Card>
    </Layout>
  )
}

export default Home
