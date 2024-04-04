import { useEffect, useState } from 'react'
import { Header } from "../../components/header"
import { CartMovie } from '../../components/cartMovie'

import { BuyMovies, Footer, ShowTotal, PriceTotal } from './styles'


interface CartMoviesProsp {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
}

export const Cart = () => {

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
  },[movies])





  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Header />

      <div style={{ backgroundColor: 'white', borderRadius: '4px' }}>

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
          <BuyMovies>FINALIZAR PEDIDO</BuyMovies>

          <ShowTotal>
            <p>Total</p>
            <PriceTotal>
              R$ {totalPrice.toFixed(2)}
            </PriceTotal>
          </ShowTotal>
        </Footer>
        )}
      </div>

    </div>
  )
}