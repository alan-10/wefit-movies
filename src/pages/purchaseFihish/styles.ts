import { styled } from 'styled-components';



export const Content = styled.div`
  margin: auto;
  background-color: white;
  width: 100%;
  height: 600px;
  border-radius: 4px;

  display: grid;
  align-items: center;
  justify-content: center;


  @media (max-width: 1170px) {
    width: 95%;
  }
`;

export const Img = styled.img`

`;


export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;

`;


export const  Button = styled.button`

  background-color: #009EDD;
  color: white;
  border-radius: 4px;
  width: 173px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  margin: auto;

`