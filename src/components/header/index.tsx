
import Card from '../../../public/card.png'
import { Link } from 'react-router-dom'
import { Head, Content, ItemCard, Img, Text, TextMycar } from './styles'

import { useMyContext  } from '../../content'



export const Header = () => {

  const silva = useMyContext()

  console.log('ssilva', silva?.getCountItems());
  
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
            <TextMycar>Meu Carrinho</TextMycar>
            </ItemCard>
            <ItemCard>
              <Text>{silva?.getCountItems()} intens</Text>
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