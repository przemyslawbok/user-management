import { store } from '@/common'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
