import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 26rem;

  margin: 3.6rem 0;
  padding: 1.2rem 2.4rem;
  resize: none;

  border: none;
  border-radius: 1rem;

  outline: none;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.OFF_WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GREY_200};
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`