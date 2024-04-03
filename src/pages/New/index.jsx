import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Content, Description, Genre } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { InputNumber } from '../../components/InputNumber'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'

export function New() {
  const [ title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const [ rate, setRate ] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleBack() {
    navigate("/"); 
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite um título para a nota!")
    }

    if(newTag) {
      return alert("Existe uma Tag no campo sem adicionar, clique em adicioná-la.")
    }

    await api.post("/notes", {
      title,
      rate,
      description,
      tags
    })

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover este filme?")

    if(confirm) {
      navigate("/")
    }
  }


  return(
    <Container>
      <Header/>

      <main>
        <Content>
          
            <ButtonText 
              title="Voltar" 
              onClick={handleBack}
            />
     
          <h2>Novo Filme</h2>
        
          <Description>
            <Input 
              type="text"
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            
            <InputNumber
              type="number"
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRate(e.target.value)}
             />
          </Description>
          
          <TextArea 
            placeholder="Descrição ou Sinopse da obra..."
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Gêneros"/>
            <Genre>
              {
                tags.map((tag, index) => (
                  <TagItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  /> 
                ))
              }

              <TagItem 
                isNew 
                placeholder="Nova Tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              /> 
              </Genre>
          
          <div className="buttons">
            <Button 
              title="Excluir filme"
              onClick={handleRemove}  
            />
            
            <Button 
              title="Salvar" 
              onClick={handleNewMovie} 
            />
          </div>
          
        </Content>
      </main>
    </Container>
  )
}