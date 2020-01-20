import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css'
import Dropzone from 'react-dropzone';
import {BlockHeader, ButtonFilmes, Menu, Overlay, Modal, Form, Label, Claquete, Star, InputModal, SpanButtons, ButtonCancel, ButtonSend, ButtonUpload, Description, QueroVer, JaVisto, InputUpload, LabelUpload, CloseModal, LabelStatus, SpanStatus, ButtonFilmesResp} from './styles'


export default class Header extends Component {

   state = {
      menu: false,
      modal: false,
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false,
      note: [],
      title: [],
      description: [],
      status: [],
      imagePreviewUrl: null,
   }


   

   openMenu = () => {
      this.setState({
         menu: !this.state.menu
      })
   }





   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description, status, note, imagePreviewUrl} = this.state;
      this.props.addMovie(title, description, status, note, imagePreviewUrl)
      this.setState({
         modal: false,
         images: ev.target.files,
         title: [].concat(this.state.title, this.state.titleValue),
      })
      

   }

   handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }


   changeWatched = () => {
      this.setState({
         status: <JaVisto>Já vi</JaVisto>
      })
   }

   changeWatch = () => {
      this.setState({
         status: <QueroVer>Quero ver</QueroVer>
      })
   }
   changeValues = (ev) =>{
      this.setState({
         [ev.target.name]: ev.target.value
      })
   }

 
   openModal = () => (
      


      <Overlay>
         <Modal>
            
            <Claquete src={require('../../assets/claquete.svg')} alt="Claquete"/>
        
            
            <Form onSubmit={this.handleSubmit}>
               <div>
                  <h1>Adicionar um novo Filme:</h1>
                  <CloseModal onClick={() => this.setState({ modal: false, })}>&#9747;</CloseModal>
               </div>

               <Label>
                  Nome:
                  <InputModal type="text" name="title" autoFocus onChange={this.changeValues}/>
               </Label>
               <Label>
                  Descrição:
                  <Description type="text" name="description" onChange={this.changeValues}/>
               </Label>
               <LabelStatus>
                  Status:
                  <SpanStatus>
                     <input type="radio" name="status" onClick={this.changeWatched}/>Já Visto
                     <input type="radio" name="status" onClick={this.changeWatch}/>Quero ver
                  </SpanStatus>
               </LabelStatus>
               <LabelUpload>
                  Imagem de exibição:
                  <InputUpload type='file' onChange={(e) => this.handleImageChange(e)} name="image"/>
                  <ButtonUpload>Adicionar Imagem</ButtonUpload>
               </LabelUpload>


               <Label>
                  Nota:
                  <span>     
                     {this.state.star1 == true ?(
                        <Star src={require('../../assets/estrela.svg')} 
                           onClick={() => this.setState({ star1: false, star2: false, star3: false, star4: false, star5: false, note: 0, })}
                        />
                     ):(
                        <Star src={require('../../assets/estrela-cinza.svg')} 
                           onClick={() => this.setState({star1: true, note: 1,})}
                        />
                     )}


                       {this.state.star2 == true ?(
                        <Star src={require('../../assets/estrela.svg')} 
                           onClick={() => this.setState({ star2: false,star3: false, star4: false, star5: false, note: 1, })}
                        />
                     ):(
                        <Star src={require('../../assets/estrela-cinza.svg')} 
                           onClick={() => this.setState({star1: true, star2: true, note: 2,})}
                        />
                     )}


                     {this.state.star3 == true ?(
                        <Star src={require('../../assets/estrela.svg')} 
                           onClick={() => this.setState({ star2: false,star3: false, star4: false, star5: false, note: 2, })}
                        />
                     ):(
                        <Star src={require('../../assets/estrela-cinza.svg')} 
                           onClick={() => this.setState({star1: true, star2: true, star3: true, note: 3,})}
                        />
                     )}


                     {this.state.star4 == true ?(
                        <Star src={require('../../assets/estrela.svg')} 
                           onClick={() => this.setState({ star2: false,star3: false, star4: false, star5: false, note: 3, })}
                        />
                     ):(
                        <Star src={require('../../assets/estrela-cinza.svg')} 
                           onClick={() => this.setState({star1: true, star2: true, star3: true, star4: true, note: 4,})}
                        />
                     )}


                     {this.state.star5 == true ?(
                        <Star src={require('../../assets/estrela.svg')} 
                           onClick={() => this.setState({ star2: false,star3: false, star4: false, star5: false, note: 4, })}
                        />
                     ):(
                        <Star src={require('../../assets/estrela-cinza.svg')} 
                           onClick={() => this.setState({star1: true, star2: true, star3: true, star4: true, star5: true, note: 5,})}
                        />
                     )}
                  </span>
               </Label>
               <SpanButtons>
                  <ButtonCancel onClick={() => this.setState({ modal: false, })}>cancelar</ButtonCancel>
                  <ButtonSend onClick={this.handleSubmit}>feito</ButtonSend>
               </SpanButtons>
            </Form>
         </Modal>
      </Overlay>
   )


  render() {
   {this.state.imagePreviewUrl = (<img src={this.state.imagePreviewUrl}/>)}


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
                     <p onClick={() => handleStateScreen('watched')}>Já vistos</p>
                  </div>
               )}
            </Menu>
  
            <ButtonFilmes onClick={() => this.setState({ modal: true, })}>adicionar filme</ButtonFilmes>
            <ButtonFilmesResp onClick={() => this.setState({ modal: true, })}>add filmes</ButtonFilmesResp>
         </div>
         {modal && this.openModal()}
      </BlockHeader>
    );
  }
}
