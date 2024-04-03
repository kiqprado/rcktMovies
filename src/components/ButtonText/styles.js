import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  line-height: 0;

  border: none;
  background: transparent;

  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    font-size: 2rem;
  }
`
