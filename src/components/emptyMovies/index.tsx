import emptyMoviesImage from '../../../public/empty-page.png'
import { Link } from 'react-router-dom'
import { Content, Title, Img, Button } from './styles' 
 
 export const EmpytMovies = () => {
  return (
    <Content>
      <Title>Parece que não há nada por aqui ;(</Title>
      <Img src={emptyMoviesImage} />

      <Link to={'/'}>
          <Button>Recarregar página</Button>
        </Link>
    </Content>
  )
 }