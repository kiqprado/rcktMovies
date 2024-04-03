import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;

  > main {
    height: 100vh;
    margin: 0 auto;
    padding: 4.8rem 12rem;

    overflow-y: auto;
  }
`

export const Content = styled.div`
  margin-bottom: 5.8rem;

  .films {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    button {
      max-width: 20.6rem;
    }

    svg {
      margin-right: 0.8rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    > :hover:nth-child(2) {
      background: ${({ theme }) => theme.COLORS.PINK_HOVER};
    }
  }
`
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 0;
  width: fit-content;
  padding: 1.2rem 1.6rem;
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  background-color: ${({ theme }) => theme.COLORS.PINK};

  svg {
    font-size: 1.8rem;
  }
`
