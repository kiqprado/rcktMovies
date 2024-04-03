import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding: 1.6rem 3.4rem;

  width: 100%;

  border-radius: 0.8rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.PINK};
`
