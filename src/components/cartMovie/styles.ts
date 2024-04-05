import { styled } from 'styled-components';



export const Content = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 0 20px;
`



export const Img = styled.img`

  height: 114px;
  border-radius: 6px;
  margin-right: 20px;
`;


export const InfoMovie = styled.div`
  color: #2F2E41;
  font-weight: bold;
  font-size: 14px;


  @media (max-width: 700px) {
    display: grid;
    justify-content: flex-start;
  }

`;


export const ShowQtd = styled.div`
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  width: 62px;
  height:26px;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 5px;

`;


export const ButtonDelete = styled.button`
  background-color: white;
  cursor: pointer;
`;



export const TDImage = styled.div`

@media (max-width: 700px) {


  display: flex;
  text-align: left;

}

`;


// #####


export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 100px 100px;

   grid-template-areas: "a b c d"
                        "e f g h" ;

   > div  {
    display: flex;
    /* justify-content: center; */
    align-items: center;
   }


   @media (max-width: 700px) {
    grid-template-areas: "e e g h"
                        /* "e e g h" */
                        "f f c c" 
                        }
`;



export const SubTitle = styled.div`

    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
       > p {
        display: none;
       }
    }

`;


export const SubTotal= styled.div`


`;