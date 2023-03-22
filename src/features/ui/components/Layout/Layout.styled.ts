import { Breakpoints } from '@/common'
import styled from '@emotion/styled'

export const Main = styled.main`
  background-color: #e7ebf0;
  max-width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: ${`${Breakpoints.Desktop}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
`