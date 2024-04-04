import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { CardMovie } from '../../components/CardMovie'
import { InputFindMovie, Content } from './style'
import { api } from '../../api/api'

interface MoviesProperties {
  id: string
  title: string,
  price: string,
  image: string
}

export function Home() {

  const [movies, setMovies] = useState<MoviesProperties[]>()
  const [moviesCoppy, setMoviescoppy] = useState<MoviesProperties[]>()
  const [valueInputMovie, setValueInputMovie] = useState('')


  useEffect(() => {
    api.get('/products').then(data => {
      setMovies(data.data)
      setMoviescoppy([...data.data])
    })
  }, []);


  function filterMovie(e: React.ChangeEvent<HTMLInputElement>) {



    setValueInputMovie(e.target.value)


    const movieFiltrad = movies?.filter(movie => {

      const compareTileMovie = e.target.value && movie.title.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(valueInputMovie)


      if (compareTileMovie) {
        return movie
      }
    })


    setMovies(movieFiltrad)


    const shouldResetMovies = Array.isArray(movieFiltrad) && movieFiltrad?.length == 0 && !e.target.value.trim()

    if (shouldResetMovies) {
      setMovies(moviesCoppy)
    }

  }



  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <div style={{ display: 'flex' }}>
        <InputFindMovie onChange={e => filterMovie(e)} value={valueInputMovie} placeholder='Buscar filme pelo nome' />
      </div>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {movies && (

          <Content>
            {movies.map(movie => (

              <CardMovie
                id={movie.id}
                movieName={movie.title}
                price={movie.price}
                image={movie.image} key={movie.id}
              />

            ))}
          </Content>

        )}
      </div>

    </div>
  )
}