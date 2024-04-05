import purched from '../../../public/purchetFinish.png';
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { Content, Img, Title, Button } from './styles'

export const PurchatFinish = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <Content>

        <Title>Compra realizada com sucesso</Title>

        <Img src={purched} />

        <Link to={'/carts'}>
          <Button> VOLTAR</Button>
        </Link>
        
      </Content>



    </div>
  )
}