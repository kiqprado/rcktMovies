import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`