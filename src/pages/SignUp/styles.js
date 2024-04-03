import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    text-align: center;
  }

  > h2 {
    margin: 4.8rem 0 4rem;
    font-size: 2.2rem;
    font-weight: 500;
  }

  > button {
    margin-top: 2.4rem;
  }

  > button:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_HOVER};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    margin-top: 4.2rem;

    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.PINK_HOVER};
  }
`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  filter: saturate(0.8) brightness(0.7);
`
