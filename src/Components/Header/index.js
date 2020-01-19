import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css'
import Dropzone from 'react-dropzone';
import {BlockHeader, ButtonFilmes, Menu, Overlay, Modal, Form, Label, Claquete, Star, InputModal, SpanButtons, ButtonCancel, ButtonSend, dragActive, dragReject, DropContainer, ButtonSendImage, Description, Status, JaVisto} from './styles'


export default class Header extends Component {

   state = {
      menu: false,
      modal: false,
      star1: false,
      note: 0,
      title: [],
      description: [],
      descriptionValue: '',
      image: [],
   }


   

   openMenu = () => {
      this.setState({
         menu: !this.state.menu
      })
   }





   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description, status} = this.state;
      this.props.addMovie(title, description, status)


      this.setState({
         modal: false,
         images: ev.target.files,
        description: [...this.state.description, this.state.descriptionValue] 
      })
   }


   changeWatched = () => {
      this.setState({
         status: <JaVisto>Já visto</JaVisto>
      })
   }

   changeWatch = () => {
      this.setState({
         status: <Status>Quero ver</Status>
      })
   }


   changeTitle = (ev) => {
      this.setState({
         title: [...  this.state.title, ev.target.value]
      })
   }

   changeDescription = (ev) => {
      this.setState({
         descriptionValue: ev.target.value,
      })
   }


   uploadFiles = (ev) => {
      this.setState({
         images: [ev.target.files[0]]
      })
      console.log(ev.target.files[0])
   }

   changeStar1 = () => {
      this.setState({
         star1: false,
      })
   }

   getNotes = () => {
      this.setState({
         star1: true,
         note: this.state.note + 1,
      })
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
                  <InputModal type="text" name="title" autoFocus onChange={this.changeTitle}/>
               </Label>
               <Label>
                  Descrição:
                  <Description type="text" name="description" onChange={this.changeDescription}/>
               </Label>
               <Label>
                  Status:
                  <span>
                     <InputModal type="radio" name="status" onClick={this.changeWatched}/>Já Visto
                  </span>
               </Label>
               <Label>
                  <span>
                     <InputModal type="radio" name="status" onClick={this.changeWatch}/>Quero ver
                  </span>
               </Label>

               <InputModal type='file' onChange={this.uploadFiles}/>
               <ButtonSendImage type="file">Adicionar Imagem</ButtonSendImage>

               <Label>
                  Nota:
                  <span>     
                           
                     {this.state.star1 === true ? (
                        <Star src={require('../../assets/estrela.svg')} onClick={this.setState({star1: false })}/>
                     ) : (
                        <Star src={require('../../assets/estrela-cinza.svg')} onClick={this.getNotes}/>
                     )}
                  </span>
               </Label>
               <SpanButtons>
                  <ButtonCancel onClick={() => this.setState({ modal: false, })}>cancelar</ButtonCancel>
                  <ButtonSend type="submit">feito</ButtonSend>
               </SpanButtons>
            </Form>
         </Modal>
      </Overlay>
   )


  render() {

   const {handleStateScreen} = this.props;
   const {modal} = this.state;
   
    return(
      <BlockHeader>
         <h1>ToDoFlix</h1>
         <div>
            <Menu>
               <p onClick={this.openMenu}>categorias</p>
               {this.state.menu && (
                  <div>
                     <p onClick={() => handleStateScreen('list')}>Quero ver</p>
                     <p onClick={() => handleStateScreen('watched')}>Já visto</p>
                  </div>
               )}
            </Menu>
  
            <ButtonFilmes onClick={() => this.setState({ modal: true, })}>adicionar filme</ButtonFilmes>
            <button onClick={() => console.log(this.state.image, this.state.title, this.state.description)}>LOGIMAGE</button>
         </div>
         {modal && this.openModal()}
         {this.state.star1}
      </BlockHeader>
    );
  }
}
