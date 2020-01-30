import React, { Component } from 'react';
import './style.css'
import '../../App.css'
import Claquete from '../../assets/claquete.svg' 

export default class Modal extends Component {

   state = {
      movie: [{
         title: '',
         description: '',
         status: '',
         image: null,
      }],
   }


   changeValues = (ev) =>{
      this.setState({
         [ev.target.name]: ev.target.value
      })
   }

   handleSubmit = (ev) => {
      ev.preventDefault()
      const {title, description, status, image} = this.state
      this.props.getValues({title, description, status,image})
      this.props.openModal()
   }

   handleImageChange = (ev) => {
      ev.preventDefault()
      let reader = new FileReader()
      let file = ev.target.files[0]

      reader.onloadend = () => {
         this.setState({
            image: reader.result
         })
      }
      reader.readAsDataURL(file)
   }



  render() {
   this.state.image = (<img src={this.state.image}/>)

    return(
      <section className="overlay">
         <div className="modal">
            <div className="blockImage">
               <img src={Claquete} className="imageModal"/>
            </div>
            <form className="formModal" onSubmit={this.handleSubmit}>
               <span className="blockTitle">
                  <h1 className="formTitle">Adicionar um filme</h1>
                  <p className="buttonExit" onClick={this.props.openModal}>X</p>
               </span>
               <label> Title
                  <input type="text" 
                     className="inputModal" 
                     onChange={this.changeValues}
                     name="title"
                     autoFocus
                  />
               </label>
               <label>Description
                  <input type="text" 
                     className="inputModal" 
                     onChange={this.changeValues}
                     name="description"
                  />
               </label>
               <label>Status
                  <input type="text" 
                     placeholder="Ja visto ou Quero ver" 
                     className="inputModal" 
                     onChange={this.changeValues}
                     name="status"
                  />
               </label>
               <label>Adicionar imagem
                  <input type="file" 
                     className="inputModalImage"
                     placeholder="inserir URL da imagem"
                     name="image"
                     onChange={(ev) => this.handleImageChange(ev)}
                  />
                  <p className="buttonImage">adicionar imagem</p>
               </label>
               <span>
                  <img/>
                  <img/>
                  <img/>
                  <img/>
                  <img/>
               </span>
               <span className="span-buttons">
                  <button className="buttonCancel" onClick={this.props.openModal}>cancelar</button>
                  <button className="buttonSend">feito</button>
               </span>
            </form>
         </div>
      </section>
    );
  }
}
