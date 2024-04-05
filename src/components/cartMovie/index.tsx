import { MdDelete } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";

import { useMyContext } from '../../content'


import {
  Content,
  Img,
  InfoMovie,
  ShowQtd,
  ButtonDelete,
  Container,
  SubTitle,
  SubTotal
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

    if (!movieFiltrade?.count) {
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
    <Content >
      <Container>
        <SubTitle style={{gridArea: 'a'}} ><p>PRODUTO</p></SubTitle>
        <SubTitle style={{gridArea: 'b'}} > <p>QTD</p></SubTitle>
        <SubTotal  style={{gridArea: 'c'}} >  SUBTOTAL</SubTotal> 
        <div style={{gridArea: 'd'}} ></div>

        <div style={{gridArea: 'e'}}>
          <Img src={data.image} alt="" />
          <InfoMovie>
            <p>{data.name}</p>
            <p>R$ {data.price}</p>
          </InfoMovie>
        
        </div>
        <div style={{ display: 'flex', alignItems: 'center',gridArea: 'f' }}>
          <MdRemoveCircleOutline color="#009EDD" size={20} onClick={() => decremenetCount(data.idMovie)} style={{ cursor: 'pointer' }} />
          <ShowQtd>
            {data.count}
          </ShowQtd>
          < MdAddCircleOutline color="#009EDD" size={20} onClick={() => incrementtCount(data.idMovie)} style={{ cursor: 'pointer' }} />
        </div>
        <div  style={{gridArea: 'g'}} > R$ {dataSome.toFixed(2)}</div>
        <div style={{ display: 'flex', justifyContent: 'end', gridArea: 'h' }} >
          <ButtonDelete onClick={() => deleteMovieCArt(data.idMovie)}>
            <MdDelete color='#009EDD' size={29} />
          </ButtonDelete>
        </div>
       

      </Container>

      
     <div style={{
      width: '100%',
      borderBottom: '1px solid #999999',
      marginTop: '1rem  '
     }}>
     </div>
      

    </Content>
  )
}