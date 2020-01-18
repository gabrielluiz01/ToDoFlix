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
      star2: <Star src={require('../../assets/estrela-cinza.svg')}/>,
      star3: <Star src={require('../../assets/estrela-cinza.svg')}/>,
      star4: <Star src={require('../../assets/estrela-cinza.svg')}/>,
      star5: <Star src={require('../../assets/estrela-cinza.svg')}/>,
      note: null,
      title: [],
      description: [],
      status: [],
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


   changeValues = (ev) => {
      this.setState({
         [ev.target.name]: ev.target.value
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

   changeNotes = () => {
      
      console.log('passei voadasso')

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
                       <Star src={require('../../assets/estrela.svg')} onClick={this.changeNotes, () => this.setState({ star1: false, star2: false, star3: false, star4: false, star5: false })}/>
                    ) : (
                       <Star src={require('../../assets/estrela-cinza.svg')} onClick={this.changeNotes, () => this.setState({ star1: true })}/>
                    )}

                     {this.state.star2 === true ? (
                       <Star src={require('../../assets/estrela.svg')} onClick={this.changeNotes, () => this.setState({ star2: false,})}/>
                     ) : (
                       <Star src={require('../../assets/estrela-cinza.svg')} onClick={ this.changeNotes,() => this.setState({ star2: true, star1: true, })}/>
                     )}
                     {this.state.star3 === true ? (
                       <Star src={require('../../assets/estrela.svg')} onClick={ this.changeNotes,() => this.setState({ star3: false })}/>
                     ) : (
                       <Star src={require('../../assets/estrela-cinza.svg')} onClick={ this.changeNotes,() => this.setState({ star3: true, star1: true, star2: true, })}/>
                     )}
                    {this.state.star4 === true ? (
                       <Star src={require('../../assets/estrela.svg')} onClick={ this.changeNotes,() => this.setState({ star4: false })}/>
                     ) : (
                       <Star src={require('../../assets/estrela-cinza.svg')} onClick={ this.changeNotes,() => this.setState({ star4: true , star3: true, star1: true, star2: true, })}/>
                     )}
                     {this.state.star5 === true ? (
                       <Star src={require('../../assets/estrela.svg')} onClick={this.changeNotes, () => this.setState({ star5: false })}/>
                     ) : (
                       <Star src={require('../../assets/estrela-cinza.svg')} onClick={this.changeNotes, () => this.setState({ star5: true, star4: true , star3: true, star1: true, star2: true, })}/>
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
