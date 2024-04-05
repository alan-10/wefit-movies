import { styled } from 'styled-components'


export const Content = styled.div`
  width: 100%;
  background-color: white;
  height: 596px;
  border-radius: 4px;

  display: grid;
  justify-items: center;
  align-items: center;

  margin: auto;

  @media (max-width: 1200px) {
   width: 90%;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
 
`;


export const Img = styled.img`
  display: flex;
  justify-content: center;

  height: 268px;
  
  @media (max-width: 700px) {
   height: 150px;
  }
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  opacity: 0px;

  background-color: #009EDD;
  width: 173px;
  height: 40px;
  cursor: pointer;

  color: white;

  @media (max-width: 700px) {
   width: 300px;
  }
`;