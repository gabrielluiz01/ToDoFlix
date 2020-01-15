import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css'

const BlockHeader = styled.header `
   display: flex;
   justify-content: space-between;
   align-items:center;
   width: 100%;
   padding: 4rem 3rem 1rem 3rem;
   box-shadow: 0px 1px 20px 0px #9b9999;

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
   }
`;

const ButtonFilmes = styled.button `
   padding: 0.3rem 0.6rem;
   border: none;
   background: #ce1b60;
   color: #fff;
   cursor: pointer;
   margin: 0 2rem;
`;

const Menu = styled.div `
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
   }

`;

const Overlay = styled.div `
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
const Modal = styled.div `
   display: flex;
   justify-content: space-around;
   min-width: 55vw;
   height: 80vh;
   background: #fff;
   padding: 1rem;
   border: none;
   border-radius: 5px;
   animation: fadeIn 1s ease-in-out;
`;

const Form = styled.form  `
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   width: 55%;
   height: 90%;

   h1{
      font-size: 23px;
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

const Label = styled.label `
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

const Claquete = styled.img `
   width: 250px;
   align-self: flex-start;
   margin-top: 5rem;
`;
const Star = styled.img `
   width: 25px;
`;

const InputModal = styled.input `
   margin-top: 0.5rem;
   padding : 0.3rem 0.5rem;
   border: 1px solid #a3a3a3;
   border-radius: 10px;
`;

const SpanButtons = styled.span `
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

const ButtonCancel = styled.button `
   background: none;
   border: none;
   color: #9AA3AC;
   font-weight: bold;
   margin-right: 2rem;
   cursor: pointer;
`;

const ButtonSend = styled.button `
   width: 80px;
   border-radius: 5px;
   border: none;
   background: #75A9A4;
   padding: 0.3rem;
   color : #fff;
   cursor: pointer;
`;


export default class Header extends Component {

   state = {
      menu: false,
      modal: false,
      title: [],
      description: [],
      status: [],
   }


   openMenu = () => {
      this.setState({
         menu: !this.state.menu
      })
   }


   changeValues = (ev) => {
      this.setState({
         [ev.target.name]: ev.target.value
      })
   }

   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description, status} = this.state;
      this.props.addList(title, description, status)
   }

   openModal = () => (
      <Overlay>
         <Modal>
            <Claquete src={require('../../assets/claquete.svg')} alt="Claquete"/>
            <Form onSubmit={this.handleSubmit}>
               <div>
                  <h1>Adicionar um novo Filme:</h1>
                  <p onClick={() => this.setState({ modal: false, })}>&#9747;</p>
               </div>

               <Label>
                  Nome:
                  <InputModal type="text" name="title" autoFocus onChange={this.changeValues}/>
               </Label>
               <Label>
                  Descrição:
                  <InputModal type="text" name="description" onChange={this.changeValues}/>
               </Label>
               <Label>
                  Status:
                  <InputModal type="text" name="status" onChange={this.changeValues}/>
               </Label>

               <Label>
                  Imagem de exibição:
                  <button>adicionar imagem</button>   
               </Label>

               <Label>
                  Nota:
                  <span>
                     <Star src={require('../../assets/estrela.svg')}/>
                     <Star src={require('../../assets/estrela.svg')}/>
                  </span>
               </Label>
               <SpanButtons>
                  <ButtonCancel onClick={() => this.setState({ modal: false, })}>cancelar</ButtonCancel>
                  <ButtonSend>feito</ButtonSend>
               </SpanButtons>
            </Form>
         </Modal>
      </Overlay>
   )


  render() {
    return(
      <BlockHeader>
         <h1>ToDoFlix</h1>
         <div>
            <Menu>
               <p onClick={this.openMenu}>categorias</p>
               {this.state.menu && (
                  <div>
                     <p onClick={() => this.props.handleStateScreen('list')}>Quero ver</p>
                     <p onClick={() => this.props.handleStateScreen('watched')}>Já visto</p>
                  </div>
               )}
            </Menu>
  
            <ButtonFilmes onClick={() => this.setState({ modal: true, })}>adicionar filme</ButtonFilmes>
         </div>
         {this.state.modal && this.openModal()}
      </BlockHeader>
    );
  }
}
