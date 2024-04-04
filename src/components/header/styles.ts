import { styled } from 'styled-components';

export const Head = styled.header`

  height: 5rem;
  color: white;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;


  /* @media (max-width: 770px) {
    height: 56px;
    background-color: red;
  } */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  /* padding: 20px; */
`;


export const ItemCard = styled.p`
  text-align: end;
`;

export const Img = styled.img`
  margin-left: 20px;
`;


export const Text = styled.p`
  color: white;
  text-decoration: none;
 
  
`;