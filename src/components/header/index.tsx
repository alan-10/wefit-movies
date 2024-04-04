
import Card from '../../../public/card.png'
import { Link } from 'react-router-dom'
import { Head, Content, ItemCard, Img, Text } from './styles'



export const Header = () => {
  return (
    <Head>
      <Content>

        <Link to={'/'}>
          <Text >WeMovies</Text>
        </Link>

      </Content>
      <Content>





        <Link to={'/carts'}>
          <div>
            < ItemCard>
            <Text>Meu Carrinho</Text>
            </ItemCard>
            <ItemCard>
              <Text>0 intens</Text>
              </ItemCard>
          </div>
        </Link>


        <Link to={'/carts'}>
          <Img src={Card} alt="" />
        </Link>


      </Content>
    </Head>
  )
}