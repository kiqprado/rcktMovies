import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  gap: 0.6rem;

  li {
    list-style: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
