import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api';


import { Container, Content, Button } from './styles'
import { Header } from '../../components/Header'
import { Cards } from '../../components/Cards'

import { TiPlusOutline } from "react-icons/ti";

export function Home() {
  const [ search, setSearch ] = useState("")
  const [ notes, setNotes ] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])


  return(
    <Container>
      <Header onSearch={setSearch}/>

      <main>
        <Content>
          <div className="films">
            <h2>Meus Filmes</h2>

            <Button to="new">
              <TiPlusOutline/>
              Adicionar filme
            </Button>
          </div>
          
          {
          notes.map(note => (
            <Cards
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
          }
        </Content>
      </main>
    </Container>
  )
}
