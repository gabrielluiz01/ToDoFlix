import React, { Component } from 'react';
import './style.css'

export default class Header extends Component {

   state ={
      menu: false,
   }

   openMenu = () => {
      this.setState({
         menu: !this.state.menu,
      })
   }

  render() {
    return(
       <header>
          <h1 className="logo">ToDoFlix</h1>
          <div className="header-block">
             <div className="menuBlock">
               <button className="menuClick" onClick={this.openMenu}>categorias</button>
               {this.state.menu && (
                  <nav className="menu">
                     <p>Quero ver</p>
                     <p>Já visto</p>
                  </nav>
               )}
             </div>
             <button className="buttonOpenModal" onClick={this.props.openModal}>adicionar filmes</button>
             <button className="buttonOpenModalResp" onClick={this.props.openModal}>add filmes</button>
          </div>
       </header>
    );
  }
}
