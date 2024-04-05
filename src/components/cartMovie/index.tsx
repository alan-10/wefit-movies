import { MdDelete } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";

import { useMyContext } from '../../content'


import {
  Content,
  Table,
  TdDelete,
  Img,
  InfoMovie,
  ShowQtd,
  ButtonDelete,
  TDImage
} from './styles'

interface CartMoviesProspa {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
}


interface CartMoviesProsp {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
  setMoviesCallback(data: CartMoviesProspa[]): void
}


export const CartMovie = (data: CartMoviesProsp) => {

  const keyMovieLocalStorage = 'myMovies'

  const myContext = useMyContext()

  function deleteMovieCArt(id: string) {
    const savedMovie = localStorage.getItem(keyMovieLocalStorage);

    const savedMoviesArray: CartMoviesProsp[] = savedMovie && JSON.parse(savedMovie) || []

    const movieFiltrade: CartMoviesProsp[] = savedMoviesArray.filter(movie => movie.idMovie !== id);

    localStorage.setItem(keyMovieLocalStorage, JSON.stringify(movieFiltrade))

    myContext?.updatecount(movieFiltrade)

    data.setMoviesCallback(movieFiltrade)

  }


  function decremenetCount(id: string) {

    const savedMovie = localStorage.getItem(keyMovieLocalStorage);

    const savedMoviesArray: CartMoviesProsp[] = savedMovie && JSON.parse(savedMovie) || []

    const movieFiltrade = savedMoviesArray.find(movie => movie.idMovie === id);

    const currentCountIsBigerZero = movieFiltrade?.count && movieFiltrade.count > 1

    if (!currentCountIsBigerZero || !movieFiltrade.count) return;

    movieFiltrade.count--

    const currentMuvieIndex = savedMoviesArray.findIndex(movie => movie.idMovie === id);


    savedMoviesArray[currentMuvieIndex] = movieFiltrade

    localStorage.setItem(keyMovieLocalStorage, JSON.stringify(savedMoviesArray))

    myContext?.updatecount(savedMoviesArray)

    data.setMoviesCallback(savedMoviesArray)

  }


  function incrementtCount(id: string) {

    const savedMovie = localStorage.getItem(keyMovieLocalStorage);

    const savedMoviesArray: CartMoviesProsp[] = savedMovie && JSON.parse(savedMovie) || []

    const movieFiltrade = savedMoviesArray.find(movie => movie.idMovie === id);

    if ( !movieFiltrade?.count) {
      return 
    }

    movieFiltrade.count++

    const currentMuvieIndex = savedMoviesArray.findIndex(movie => movie.idMovie === id);


    savedMoviesArray[currentMuvieIndex] = movieFiltrade



    localStorage.setItem(keyMovieLocalStorage, JSON.stringify(savedMoviesArray))

    data.setMoviesCallback(savedMoviesArray)

    myContext?.updatecount(savedMoviesArray)

  }


  const dataSome = data?.count ? data.count * Number(data.price) : 0;
  return (
    <Content>
      <Table>
        <tr >
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th></th>
        </tr>
        <tr>
          <TDImage style={{ display: 'flex', alignItems: 'center' }}>
            <Img src={data.image} alt="" />
            <InfoMovie>
              <p>{data.name}</p>
              <p>R$ {data.price}</p>
            </InfoMovie>
          </TDImage>

          <td >
            <div style={{ display: 'flex', alignItems: 'center', }}>
              <MdRemoveCircleOutline color="#009EDD" size={20} onClick={() => decremenetCount(data.idMovie)} style={{ cursor: 'pointer' }} />
              <ShowQtd>
                {data.count}
              </ShowQtd>
              < MdAddCircleOutline color="#009EDD" size={20}  onClick={() => incrementtCount(data.idMovie)} style={{ cursor: 'pointer' }} />
            </div>

          </td>
          <td> R$ {dataSome.toFixed(2)}</td>

          <TdDelete>
            <ButtonDelete onClick={() => deleteMovieCArt(data.idMovie)}><MdDelete color='#009EDD' size={29} />
            </ButtonDelete>
          </TdDelete>
        </tr>

      </Table>

      <hr style={{ color: 'black' }} />

    </Content>
  )
}