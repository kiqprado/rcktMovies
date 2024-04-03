import styled from 'styled-components'

export const Container = styled.div`
  max-width: 112rem;
  padding: 2rem 3rem;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  cursor: pointer;

  ul {
    margin: 0.4rem 0 0.8rem;
    svg {
      font-size: 1.4rem;
    }
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
`

export const Content = styled.div`
  > p {
    text-align: justify;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
