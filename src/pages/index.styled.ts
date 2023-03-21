import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const Main = styled.main`
  background-color: #e7ebf0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
`

export const StyledCard = styled(Card)`
  width: 100%;
`

export const CardHeader = styled.div`
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
`