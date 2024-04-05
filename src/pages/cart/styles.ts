import { styled } from 'styled-components';







export const Content = styled.div`
  background-color: 'white'; 
  border-radius: '4px';
  margin: auto;

  @media (max-width: 1170px) {
    margin: 1rem;
    /* padding: 30px; */
  }

  
`;






export const Footer = styled.footer`
   width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem; 

  @media (max-width: 700px) {

    display: grid;
    grid-template-columns: repeat(1, 1fr);
  
    :nth-child(1) { order: 1; }
  }

`;


export const ShowTotal = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {

    :nth-child(2) { order: 1; }
 
}

  > p {
    color: #999999;
  }

`;

export const PriceTotal = styled.div`
  margin-left: 1.4rem;
  font-weight: bold;

`;




export const BuyMovies = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  background-color: #009EDD;
  color: white;
  border-radius: 4px;

  cursor: pointer;

  @media (max-width: 700px) {
    width:100%;
    padding: .1rem;
    margin-top: 0.3rem;
    /* background-color:red; */
  }
`;