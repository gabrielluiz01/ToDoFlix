import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css'
import Dropzone from 'react-dropzone';
import {BlockHeader, ButtonFilmes, Menu, Overlay, Modal, Form, Label, Claquete, Star, InputModal, SpanButtons, ButtonCancel, ButtonSend, dragActive, dragReject, DropContainer, ButtonSendImage, Description, StatusOptions, LabelStatus} from './styles'



export default class Header extends Component {

   state = {
      menu: false,
      modal: false,
      star: <Star src={require('../../assets/estrela-cinza.svg')}/>,
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
         [ev.target.name]: ev.target.value,
      })   
   }




   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description} = this.state;
      this.props.addMovie(title, description)

      this.setState({
         modal: false,
      })
   
   }


   changeStar = () => {
      this.setState({
         star: <Star src={require('../../assets/estrela.svg')}/>
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
                  <InputModal type="text" name="title" autoFocus onChange={this.changeValues}/>
               </Label>
               <Label>
                  Descrição:
                  <Description type="text" name="description" onChange={this.changeValues}/>
               </Label>
               <Label>
                  Status:
                  <StatusOptions>
                     <InputModal type="radio" name="status"/>Já Visto
                  </StatusOptions>
               </Label>
               <LabelStatus>
                  <StatusOptions>
                     <InputModal type="radio" name="status"/>Quero ver
                  </StatusOptions>
               </LabelStatus>

               <Dropzone accept="image/*" onDropAccepted={this.props.handleUpload}>
                  {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                     <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                     >
                        <input {...getInputProps()}/>
                     </DropContainer>
                  )}
               </Dropzone>
               <ButtonSendImage onDropAccepted={() => {}}>Adicionar Imagem</ButtonSendImage>

               <Label>
                  Nota:
                  <span>
                     {this.state.star}
                     {this.state.star}
                     {this.state.star}
                     {this.state.star}
                     {this.state.star}
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
         </div>
         {modal && this.openModal()}
      </BlockHeader>
    );
  }
}
