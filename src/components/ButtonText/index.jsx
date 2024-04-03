import { Container } from './styles'
import { TiArrowBack } from "react-icons/ti";

export function ButtonText({title, isActive = false, ...rest}) {
  return(
    <Container 
      type="button"
      $isactive={isActive}
      {...rest}
    >
      <TiArrowBack/>
      {title}
    </Container>
  )
}