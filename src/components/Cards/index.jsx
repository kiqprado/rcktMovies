import { Container, Content } from './styles'
import { Rate } from '../Rate'
import { Tag } from '../Tag'

export function Cards({ data, ...rest}) {

  return (
    <Container {...rest}>
       <h2>{data.title}</h2>
       
       <Rate rating={data.rate} />

       {
        data.tags &&
        <Content>
          <p>{data.description}</p>

          {
            data.tags.map(tag => 
              <Tag key={tag.id} title={tag.name}/>
            )
          }
        </Content>
       }
    </Container>
  )
}