import { styled } from 'styled-components';



export const Content = styled.div`

  margin-top: 0.7rem;

  height: 324px;
  width: 338px;
  background-color: white;
  border-radius: 4px;

  display: grid;
  justify-content: center;

 
   color: black;
  
`;


export const ImgMovie = styled.img`
  width: 150px;
  height: 200px;
  margin: auto;
`;


export const Name = styled.p`
  color: black;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
`;

export const Price = styled.p`

  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

interface PropsGlobalStyle {
  green: boolean
}


export const ButtonAddToCard = styled.button<PropsGlobalStyle>`
  /* background-color: #009EDD; */
  
  background-color: ${(props: PropsGlobalStyle) => props.green ? '#039B00;' : '#009EDD;'};
  height: 40px;
  min-width: 320px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  padding: 20px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); 

    height: 30px;
    min-width: 300px;
    padding: 15px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr); 

    height: 25px;
    min-width: 280px;
    padding: 15px;
  }
`;