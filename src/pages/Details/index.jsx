import { useState, useEffect } from 'react' 
import { useParams, useNavigate } from "react-router-dom"
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container, UserData, ButtonBack } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Rate } from '../../components/Rate'
import { Tag } from '../../components/Tag'

import avatarPlaceholder from '../../assets/avatar-placeholder.svg'

import { CiTimer } from "react-icons/ci";

export function Details() {
  const [data, setData] = useState(null)
  const { user } = useAuth()
  const [createdAt, setCreatedAt] = useState(null)

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params =  useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover esta nota?")

    if(confirm) {
      await api.remove(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function addZeroToDate(number) {
    return number < 10 ? `0${number}` : number;
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)

      const NoteDate = new Date(response.data.created_at)
      const formattedDate = `${addZeroToDate(NoteDate.getDate())}/${addZeroToDate(NoteDate.getMonth() + 1)}/${NoteDate.getFullYear()}`
      const formattedTime = `${addZeroToDate(NoteDate.getHours())}:${addZeroToDate(NoteDate.getMinutes())}:${addZeroToDate(NoteDate.getSeconds())}`;

      setCreatedAt(`${formattedDate} às ${formattedTime}`);
    }

    fetchNote()
  }, [])

  return(
    <Container>
      
      <Header/>
      {
        data &&
      <main>

        <ButtonBack onClick={handleBack} >
          <ButtonText title="Voltar"/>
        </ButtonBack>
        

        <div className="title">
          <h1>{data.title}</h1>
          
          <Rate rating={data.rate} />
        </div>
     
        <UserData>
          <div className="user">
            <img src={avatarURL} alt={`Foto de: ${user.name}`} />
            <span>Por {user.name}</span>
          </div>
        
          <div className="data">
            <CiTimer/>
            <span>{createdAt}</span>
          </div>
        </UserData>

        {
          data.tags &&
          <div>
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
              }
          </div>
        }

        <p>{data.description}</p>
     
      </main>
       }
    </Container>
  )
}