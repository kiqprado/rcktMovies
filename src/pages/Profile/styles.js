import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;

    padding: 0 12rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  }
`
export const ButtonBack = styled(Link)`
  display: flex;
  width: fit-content;
`

export const Form = styled.form`
  margin: 0 auto;
  max-width: 34rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > input {
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  }

  > button {
    background-color: ${({ theme }) => theme.COLORS.VIOLET};
  }

  > button:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_HOVER};
    color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
  }

  > div:nth-child(3),
  div:nth-child(5) {
    margin-bottom: 1.6rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;

  align-self: center;

  margin: -6.2rem 0 6rem;

  > img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  > label {
    position: absolute;
    right: 0.7rem;
    bottom: 0.7rem;

    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    input {
      display: none;
    }

    svg {
      font-size: 2.4rem;
    }
  }
`
