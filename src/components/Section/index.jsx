import { Container } from './styles'

export function Section({title, content}) {
  return(
    <Container>
      <h2>{title}</h2>
      {content}
    </Container>
  )

}