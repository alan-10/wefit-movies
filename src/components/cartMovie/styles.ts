import { styled } from 'styled-components';



export const Content = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 0 20px;
`


export const Table = styled.table`
/* background-color: red; */
  /* margin-top: 1rem; */
  width: 100%;
  border-top: 0 ;
  border-bottom: 1px solid #999999 ;
  
  padding-bottom: 1.5rem;


  >tr, th, td {
    width: 16rem;
  }



  > tr >  th{
      text-align: left;
      color: #999999;
      
  }

  > tr > td {
    padding-top: 30px;
    font-weight: bold;
    font-size: 14px;
  }

  @media (max-width: 700px) {

    >tr, th, td {
    width: 10rem;
  }
    
  }



`



export const TdDelete = styled.td`
  text-align: right;
`;


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
    /* text-align: left; */
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



export const TDImage = styled.td`

@media (max-width: 700px) {


  display: flex;
  text-align: left;


}

`;