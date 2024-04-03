import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  > input {
    width: 100%;
    padding: 0.8rem 2.4rem;

    background: none;
    border: none;
    border-radius: 1rem;

    outline: none;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GREY_200};
    }
  }

  > svg {
    margin: 0 -1.2rem 0 1.2rem;
  }

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`
