import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import '../../App.css'
import Dropzone from 'react-dropzone';
import {BlockHeader, ButtonFilmes, Menu, Overlay, Modal, Form, Label, Claquete, Star, InputModal, SpanButtons, ButtonCancel, ButtonSend, UploadMessage, dragActive, dragReject, DropContainer, messageColors, ButtonSendImage} from './styles'



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


   changeTitle = (ev) => {
      this.setState({
         title: ev.target.value.concat(this.state.title)
      })   
   
   }
   changeDescription = (ev) => {
      this.setState({
         description: ev.target.value
      })   
   
   }
   changeStatus = (ev) => {
      this.setState({
         status: ev.target.value
      })   


   }



   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description, status} = this.state;
      this.props.addList(title, description, status)
      this.setState({
         modal: false,
      })
   
   }

   changeStar = () => {
      this.setState({
         star: <Star src={require('../../assets/estrela.svg')}/>
      })
   }

   renderDragMessage = (isDragActive, isDragReject) =>{
      if(!isDragActive){
         return <UploadMessage>Arraste arquivos aqui !</UploadMessage>
      }

      if(isDragReject){
         return <UploadMessage type="error"> Arquivo não suportado</UploadMessage>
      }

      return <UploadMessage type="sucess">Solte os arquivos aqui</UploadMessage>
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
                  <InputModal type="text" name="description" onChange={this.changeDescription}/>
               </Label>
               <Label>
                  Status:
                  <InputModal type="text" name="status" onChange={this.changeStatus}/>
               </Label>

               <Dropzone accept="image/*" onDropAccepted={this.props.handleUpload}>
                  {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                     <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                     >
                        <input {...getInputProps()}/>
                        {this.renderDragMessage(isDragActive, isDragReject)}
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
