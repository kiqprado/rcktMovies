import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  overflow: hidden;

  > main {
    height: 100vh;
    margin: 0 auto;
    padding: 4rem 12rem;

    overflow-y: auto;
  }
`

export const Content = styled.section`
  margin-bottom: 8rem;

  > button:first-child {
    margin-bottom: 2.4rem;
  }

  .buttons {
    display: flex;
    gap: 4rem;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    > button:hover {
      background-color: ${({ theme }) => theme.COLORS.PINK_HOVER};
      color: ${({ theme }) => theme.COLORS.SATIN_WHITE};
    }
  }
`

export const Description = styled.div`
  display: flex;
  gap: 4rem;

  margin-top: 4rem;
`

export const Textarea = styled.textarea`
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

export const Genre = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  width: 100%;
  padding: 1.6rem;
  border-radius: 1rem;
  margin: 2rem 0 4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`
