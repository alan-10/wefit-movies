import React from 'react'
import { createContext, useContext, useState } from 'react';



type CartMoviesType  = {
  idMovie: string;
  count?: number;
  name: string;
  image: string;
  price: string
}

interface IContext {
  updatecount(data: CartMoviesType[]): void;
  getCountItems(): number;
}




export const ContextCreate = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [countItemsCarts, setCountItemsCarts] = useState<CartMoviesType[]>(() => {
    const moviedSavedLocal = localStorage.getItem('myMovies');

    const movies: CartMoviesType[] = moviedSavedLocal && JSON.parse(moviedSavedLocal) || []

    return movies || []

  })

  function updatecount(data: CartMoviesType[]):void {
    setCountItemsCarts(data)
  }

  function getCountItems() {
    console.log('get alan');
    
    const countItems = countItemsCarts.reduce((acc: number, currentValue: CartMoviesType) => {

      const count = currentValue && currentValue?.count && Number(currentValue.count) || 0;

       return acc +count 
    },0) 

    return countItems
  }


  return (
    <ContextCreate.Provider value={{
    getCountItems: getCountItems,
    updatecount: updatecount

    }}>
      {children}
    </ContextCreate.Provider>
  )

}

export function useMyContext (){
 const context = useContext(ContextCreate)

 return context
}





