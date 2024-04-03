import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.section`
  width: 100%;
  height: 8.6rem;

  display: flex;
  gap: 6.4rem;
  align-items: center;

  padding: 0 12rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: 700;
  }

  > a:hover {
    color: ${({ theme }) => theme.COLORS.PINK_HOVER};
  }

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GREY_500};
`

export const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  min-width: fit-content;
  margin-right: 0.7rem;

  .user {
    display: flex;
    flex-direction: column;

    a {
      align-self: end;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }

    a:hover {
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }

    > button {
      padding: 1.2rem 0;
      justify-content: end;
      font-size: 1.4rem;

      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.GREY_200};
    }

    > button:hover {
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }
  }

  img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
`

export const User = styled(Link)`
  font-size: 1.4rem;
`
