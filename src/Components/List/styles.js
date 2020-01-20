import styled from "styled-components";

export const MyList = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1rem;

  h1{
    font-size: 30px;
    text-align: left;
  }
`;

export const ListBlock = styled.div `
  display: flex;
  width: 100%;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

export const BlockFilmes = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25vw;
  padding: 1rem 0;

  @media(max-width: 768px){
    width: 60%;
    display: flex;
    align-items: center;
  }
  @media(max-width: 425px){
    width: 100%;
  }
`;





export const Title = styled.p `
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  min-width: 70%;
  text-align: left;
  cursor: pointer;

  @media(max-width: 768px){
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Description = styled.p `
  width: 70%;
  text-align: left;
  color: #94A2AC;
  cursor: pointer;
  
  @media(max-width: 768px){
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
  @media(max-width: 375px){
    width: 100%;
  }
`;

export const Notes = styled.div`
  position: absolute;
  top: 0vh;
  right: 5vw;
  width: 40px;
  height: 40px;
  background: #75A9A4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  color: #fff;
  font-weight: 800;
  
  @media(max-width: 768px){
    right: 13vw;
  }
  @media(max-width: 425px){
    right: 17vw;
  }
  @media(max-width: 350px){
    right: 4vw;
  }
`;
export const Block = styled.div`
  width: 20vw;

  img{
    width: 200px;
    height: 240px;
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;