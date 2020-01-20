import styled from "styled-components";

export const BlockHeader = styled.header `
   display: flex;
   justify-content: space-between;
   align-items:center;
   width: 100%;
   padding: 4rem 3rem 1rem 3rem;
   box-shadow: 0px 1px 20px 0px #9b9999;

   @media (max-width: 425px){
      padding: 3rem 1rem 2rem;
   }
   h1{
      font-size: 35px;
      color: #ce1b60;
   }

   div{
      display: flex;
      width: auto;
      align-items: center;
   }

   p{
      cursor: pointer;
      @media(max-width: 768px){
         display: none;
      }
   }
`;

export const ButtonFilmes = styled.button `
   padding: 0.3rem 0.6rem;
   border: none;
   background: #ce1b60;
   color: #fff;
   cursor: pointer;
   margin: 0 2rem;
   
   @media(max-width: 768px){
      display: none;
   }
`;

export const ButtonFilmesResp = styled.button`
   padding: 0.3rem 0.6rem;
   border: none;
   background: #ce1b60;
   color: #fff;
   cursor: pointer;
   margin: 0 2rem;
   display: none;

   @media(max-width: 768px){
      display: block;
   }
`;

export const Menu = styled.div `
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: auto;

   div{
      position: absolute;
      top: 4vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 8vw;
      box-shadow: 1px 6px 9px 0px #9b9999;
      background: #fff;
      padding: 0.3rem;
      animation: fadeIn 1s ease-in-out;
   }
   @keyframes fadeIn{
      to{
         margin-top: 1vh;
      }
      0% { opacity: 0% ;}
      100% {  opacity: 100%; }
   }
   p{
      margin: 0.2rem 0;
      &:hover{
         font-weight: bold;
      }
   }

`;
export const QueroVer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  background: #75a9a4;
  color: #fff;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const JaVisto = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  background: #F0C18B;
  color: #fff;
  margin-bottom: 1rem;
  cursor: pointer;
`;


export const Overlay = styled.div `
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   background: #00000040;
   z-index: 99;
`;
export const Modal= styled.div `
   display: flex;
   justify-content: space-around;
   min-width: 55vw;
   height: 80vh;
   background: #fff;
   padding: 1rem;
   border: none;
   border-radius: 5px;
   animation: fadeIn 1s ease-in-out;
   z-index: 99;

   @media(max-width: 768px){
      height: 90vh;
   }
   @media(max-width: 425px){
      min-width: 90%;
      
   }
`;

export const Form = styled.form  `
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   width: 55%;
   height: 90%;

   @media(max-width: 768px){
      height: 90vh;
   }

   @media(max-width: 425px){
      width: 100%;
   }

   h1{
      font-size: 20px;
      color: #364859;
   }

   div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
   }
`;
export const CloseModal = styled.p`
   font-size: 30px;
   color: #6b6b6b70;
`;

export const Label = styled.label `
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 100%;
   button{
      width: 180px;
      align-self: flex-end;
      border-radius: 5px;
      border: none;
      background: #75A9A4;
      padding: 0.3rem;
      color : #fff;
      cursor: pointer;
   }
`;

export const Claquete = styled.img `
   width: 250px;
   align-self: flex-start;
   margin: 5rem 2rem 0 0;

   @media(max-width: 425px){
      display: none;
   }
`;
export const Star = styled.img `
   width: 25px;
   background: #000;
   cursor: pointer;
`;

export const InputModal = styled.input `
   width: 100%;
   margin-top: 0.5rem;
   border: 2px solid #000;
   padding : 0.4rem 0.5rem;
   border-radius: 10px;
   background: #F4F6F8;
`;



export const SpanButtons = styled.span `
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

export const ButtonCancel = styled.button `
   background: none;
   border: none;
   color: #9AA3AC;
   font-weight: bold;
   margin-right: 2rem;
   cursor: pointer;
`;

export const ButtonSend = styled.button `
   width: 80px;
   border-radius: 5px;
   border: none;
   background: #75A9A4;
   padding: 0.3rem;
   color : #fff;
   cursor: pointer;
`;


export const Description = styled.textarea`
   width: 100%;
   margin-top: 0.5rem;
   padding : 0.4rem 0.5rem;
   border-radius: 10px;
   border: 2px solid #000;
   background: #F4F6F8;
`;

export const InputUpload = styled.input `
   display: none;
`; 

export const LabelUpload = styled.label`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;

   @media(max-width: 768px){
      text-align: left;
      width: 100%;
   }
`;

export const ButtonUpload = styled.h3`
   width: 150px;
   background: #75A9A4;
   padding: 0.5rem;
   border-radius: 5px;
   color: #FFF;
   align-self: flex-end;

   @media(max-width: 768px){
      align-self: flex-start;
   }
`;

export const LabelStatus = styled.label`
   width: 100%;
   display: flex;
   flex-direction: column;
   text-align: left;
`;
export const SpanStatus = styled.span`
   display: flex;
   justify-content: space-evenly;
   width: 100%;
`;
