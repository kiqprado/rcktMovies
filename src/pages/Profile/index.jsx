import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar, ButtonBack } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import avatarPlaceholder  from '../../assets/avatar-placeholder.svg'

export function Profile() {
  const {user, updateProfile} = useAuth()

  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ currentPassword, setCurrentPassword ] = useState()
  const [ newPassword, setNewPassword ] = useState()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [ avatar, setAvatar ] = useState(avatarURL)
  const [ avatarFile, setAvatarFile ] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: currentPassword,
      password: newPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user, userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <ButtonBack to="/">
          <ButtonText title="Voltar"/>
        </ButtonBack>
        
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        
        <Input 
          placeholder="E-mail" 
          type="email" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock}
          onChange={e => setCurrentPassword(e.target.value)}
        />

        <Input 
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}