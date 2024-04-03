import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Form, Background } from './styles'
import { FiUser, FiMail, FiLock, FiArrowLeft  } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post('/users', { name, email, password}).then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    }).catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar.')
      }
    })
  }

  return(
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome" 
          icon={FiUser} 
          type="text" 
          onChange={e => setName(e.target.value)}
        />
        
        <Input 
          placeholder="E-mail" 
          icon={FiMail} 
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input 
          placeholder="Senha" 
          icon={FiLock} 
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to ="/"> <FiArrowLeft/> Voltar para o login</Link>
      </Form>
    </Container>
  )
}