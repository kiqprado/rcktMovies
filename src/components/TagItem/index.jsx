import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function TagItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-del'}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}