import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  line-height: 0;

  padding: 0.8rem 1.6rem;
  border-radius: 1rem;

  background: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_400};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GREY_200}` : 'none'};

  > input,
  button {
    border: none;
    background: none;

    color: ${({ theme, $isnew }) =>
      $isnew ? theme.COLORS.GREY_200 : theme.COLORS.WHITE};
  }

  > input {
    max-width: 12rem;
    outline: none;
  }

  > button {
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      transition: all 0.4s ease-in-out;
    }

    > svg:hover {
      color: ${({ theme }) => theme.COLORS.PINK_HOVER};
      transform: scale(1.2);
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GREY_200};
  }
`
