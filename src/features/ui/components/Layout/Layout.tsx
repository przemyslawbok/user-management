import Head from 'next/head'

import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { ILayoutProps } from './Layout.data'
import { Main, Wrapper } from './Layout.styled'

const Layout: FC<ILayoutProps> = (props) => {
  const { name, description, children } = props

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Wrapper>{children}</Wrapper>
        <Toaster />
      </Main>
    </>
  )
}

export default Layout
