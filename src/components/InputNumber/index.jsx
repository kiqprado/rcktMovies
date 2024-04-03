import { Container } from './styles'

export function InputNumber({ icon : Icon, ...rest }) {
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input 
        {...rest}
        type="number"
        min="0"
        max="5"
      />
    </Container>
  )
}