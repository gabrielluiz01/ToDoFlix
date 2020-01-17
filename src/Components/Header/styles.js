import styled, {css} from "styled-components";

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
         margin-top: 2vh;
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
`;
export const Modal = styled.div `
   display: flex;
   justify-content: space-around;
   min-width: 55vw;
   height: 80vh;
   background: #fff;
   padding: 1rem;
   border: none;
   border-radius: 5px;
   animation: fadeIn 1s ease-in-out;

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
   p{
      font-size: 30px;
      color: #6b6b6b70;
   }
`;

export const Label = styled.label `
   display: flex;
   flex-direction: column;

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
   width: 40%;
   align-self: flex-start;
   margin-top: 5rem;

   @media(max-width: 425px){
      display: none;
   }
`;
export const Star = styled.img `
   width: 25px;
   background: #000;
`;

export const InputModal = styled.input `
   margin-top: 0.5rem;
   padding : 0.4rem 0.5rem;
   border-radius: 10px;
   border: none;
   background: #F4F6F8;
   border: 2px solid #000;
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

export const dragActive = css`
   border-color: #78e5d5;
`;

export const dragReject = css`
   border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
   className: 'dropzone'
})`
   margin-top: 0.5rem;
   padding : 0.4rem 0.5rem;
   border-radius: 10px;
   border: none;
   background: #F4F6F8;
   border: 2px dashed #ddd;
   transition: height 0.2s ease;


   ${props => props.isDragActive && dragActive};
   ${props => props.isDragReject && dragReject};
`;
export const messageColors = {
   default: '#999',
   error: '#e57878',
   sucess: '#78e5d5',
}

export const UploadMessage = styled.h2`
   display: flex;
   color: ${props => messageColors[props.type || 'default']};
   justify-content: center;
   align-items: center;
   padding: 15px 0;
`;
export const ButtonSendImage = styled.button `
   width: 150px;
   border-radius: 5px;
   border: none;
   background: #75A9A4;
   padding: 0.3rem;
   color : #fff;
   cursor: pointer;
   align-self: flex-end;
`;