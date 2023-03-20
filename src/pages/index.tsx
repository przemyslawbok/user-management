import Head from 'next/head'
import { UsersList } from '@/features'
import { CardHeader, Main, Wrapper } from './index.styled'
import { Button, Card, CardContent, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="User Management Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Wrapper>
          <Card>
            <CardContent>
              <CardHeader>
                <Typography variant="h5">User List</Typography>
                <Button variant="contained">Add new</Button>
              </CardHeader>
              <UsersList />
            </CardContent>
          </Card>
        </Wrapper>
      </Main>
    </>
  )
}
