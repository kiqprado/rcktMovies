import { Container } from './styles'

import { IoStarSharp, IoStarOutline } from 'react-icons/io5'

export function Rate({ rating, ...rest }) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
      if( i <= rating) {
        stars.push(<IoStarSharp key={i}/>)
      } else {
        stars.push(<IoStarOutline key={i}/>)
      }
    }
  
    return(
      <Container {...rest}>
      <li>
         {stars}
      </li>
      </Container>
    )
  }