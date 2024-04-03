import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;

  > main {
    height: 100vh;
    margin: 0 auto;
    padding: 4rem 12rem;

    overflow-y: auto;
  }

  .title {
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 1.8rem;
    margin: 2.5rem 0;

    ul {
      li {
        margin-top: 0.4rem;

        svg {
          font-size: 2rem;
        }
      }
    }
  }

  p {
    margin: 2.4rem 0 5.6rem;
    text-align: justify;
  }
`

export const UserData = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 2.6rem;

  .user {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      object-fit: cover;
      aspect-ratio: 16/9;

      transition: all 0.4s ease-in-out;
    }

    img:hover {
      width: 2.2rem;
      height: 2.2rem;
    }

    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  }

  .data {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    svg {
      font-size: 1.8rem;
    }

    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  }
`

export const ButtonBack = styled(Link)`
  display: flex;
  width: fit-content;
`
