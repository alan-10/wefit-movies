import { styled } from 'styled-components'

export const InputFindMovie = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  
  color: black;

  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  margin-bottom: 1rem;
  padding:  0px  15px 0 15px;
  margin: auto;


  &::placeholder {
    padding-left: 10px;
    color: #C0C0C0;
  }

  @media (max-width: 1200px) {
  
  }


  @media (max-width: 770px) {
    height: 45px;
    width: 90%;
  }

  
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px;
  margin: auto;
  height: auto;

  @media (max-width: 1200px) {
    /* grid-template-columns: repeat(3, 1fr);  */
    gap: 20px;
  }


  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr); 
  }

`;

