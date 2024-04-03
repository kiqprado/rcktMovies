import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Container, Form, Background } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn() {
  const { signIn } = useAuth()

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function handleSignIn() {
    signIn( {
      email,
      password
    })
  }
  
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>

        <h2>Faça seu login</h2>

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
          onChange={e => setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background/>
    </Container>
  )
}