import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container , Profile, User} from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

import avatarPlaceholder from '../../assets/avatar-placeholder.svg'

export function Header( { onSearch }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function handleSearchChange(e) {
    const searchEvent = e.target.value
    onSearch(searchEvent)
  }

  return(
    <Container>
      
      <Link to="/">RocketMovies</Link>
      
      <Input 
        placeholder="Pesquisar pelo título"
        onChange={handleSearchChange}
      />

      <Profile>
        <div className="user">
          <User to="/profile">{user.name}</User>
          <Button title="Sair" onClick={handleSignOut}/>
        </div>
        
        <Link to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Link>
        
      </Profile>
    </Container>
  )
}