import { Layout, UsersList } from '@/features'
import { CardHeader } from './index.styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { onAddUserClick } from './index.logic'

const Home = () => {
  return (
    <Layout name="Home" description="User Management Home Page">
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <CardHeader>
            <Typography variant="h5">User List</Typography>
            <Button variant="contained" onClick={onAddUserClick}>
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
