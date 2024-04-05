import { useState } from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useMyContext } from '../../content'

import { Content, ButtonAddToCard, Name, ImgMovie, Price } from './styled'

type CardMovieProps = {
  movieName: string;
  price: string;
  image: string;
  id: string;
}

interface CardSaved {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
}

export const CardMovie = ({ movieName, image, price, id }: CardMovieProps) => {

  const myContext = useMyContext() 

  const keyLocalStorage = `${movieName}-${id}`;

  const [countAddedCard, setCountAddedCard] = useState<number>(() => {

    const moviesStorage = localStorage.getItem('myMovies');

    const movies = moviesStorage && JSON.parse(moviesStorage) || [] as CardSaved[]

    const selectedmovie: CardSaved = movies.find((movie: CardSaved) => movie.idMovie === id);

    return selectedmovie?.count || 0;

  })



  function addMovieToCard(id: string) {
    setCountAddedCard(countAddedCard + 1)

    const storeCard: CardSaved = {
      idMovie: id,
      name: movieName,
      count: countAddedCard + 1,
      image: image,
      price: price
    }

    localStorage.setItem(keyLocalStorage, JSON.stringify(storeCard));

    const itemSaved = localStorage.getItem('myMovies');

    const items: CardSaved[] = itemSaved && JSON.parse(itemSaved) || []

    const arr: CardSaved[] = [];

    arr.push(...items)

    const arr2 = arr.flat(Infinity) as CardSaved[]

    if (arr2.length < 1) {
      arr.push(storeCard)
    }

    const index = arr.findIndex((item) => item.idMovie === storeCard.idMovie)


    if (index === -1) {
      arr.push(storeCard)
    }

    if (index !== -1) {
      arr[index] = storeCard
    }

    localStorage.setItem('myMovies', JSON.stringify(arr.flat(Infinity)));
    myContext?.updatecount(arr.flat(Infinity))

  }



  return (

    <Content>
      <ImgMovie src={image} />
      <Name>{movieName}</Name>
      <Price> R$ {price}</Price>

      <ButtonAddToCard onClick={() => addMovieToCard(id)} type='button' green={!!(countAddedCard > 0)}>
        <MdOutlineAddShoppingCart />  {countAddedCard} ADICIONAR AO CARRINHO
      </ButtonAddToCard>


    </Content>
  )
}