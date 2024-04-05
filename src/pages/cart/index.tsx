import { useEffect, useState } from 'react'
import { Header } from "../../components/header"
import { CartMovie } from '../../components/cartMovie'
import { Link } from 'react-router-dom'
import { useMyContext } from '../../content'
import { FaRegSadTear } from "react-icons/fa";


import { BuyMovies, Footer, ShowTotal, PriceTotal, Content } from './styles'


interface CartMoviesProsp {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
}

export const Cart = () => {

  const myContext = useMyContext()

  const [totalPrice, setTotalPrice] = useState(0)

  const [movies, setMovies] = useState<CartMoviesProsp[]>(() => {
    const moviedSavedLocal = localStorage.getItem('myMovies');

    const movies = moviedSavedLocal && JSON.parse(moviedSavedLocal) || []


    return movies || []

  })

  useEffect(() => {

    const total = movies.reduce((acc: number, currentValue: CartMoviesProsp) => {

      const result = (Number(currentValue.price) * Number(currentValue.count))
      return acc + result;

    }, 0)

    setTotalPrice(total)
  }, [movies])


  function purchetFinish() {
    localStorage.removeItem("myMovies");
    myContext?.updatecount([])
  }



  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Header />

      <Content style={{ backgroundColor: 'white', borderRadius: '4px' }}>

        {movies.map((movie) => (
          <CartMovie
            idMovie={movie.idMovie}
            image={movie.image}
            name={movie.name}
            price={movie.price}
            count={movie.count}
            setMoviesCallback={setMovies}
          />
        ))}

        {movies.length > 0 && (
          <Footer>

            <Link to={"/purchetFinish"}> <BuyMovies  onClick={() => purchetFinish()}>FINALIZAR PEDIDO</BuyMovies></Link>

            <ShowTotal>
              <p>Total</p>
              <PriceTotal>
                R$ {totalPrice.toFixed(2)}
              </PriceTotal>
            </ShowTotal>
          </Footer>
        )}



      </Content>
      {movies.length == 0 && <h2 style={{ color: 'white', textAlign: 'center', marginTop: '5rem' }}>Você não tem filmes no carrinho.  <FaRegSadTear /> </h2>}

    </div>
  )
}