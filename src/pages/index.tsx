import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { UsersList } from '@/features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="User Management Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UsersList />
      </main>
    </>
  )
}
