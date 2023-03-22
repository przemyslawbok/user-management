import { CircularProgress } from '@mui/material'
import { LoaderWrapper } from './Loader.styled'

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  )
}

export default Loader
