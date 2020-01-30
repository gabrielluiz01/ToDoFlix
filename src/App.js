import React, { Component } from 'react';
import './App.css';
import Modal from './Components/Modal'
import Header from './Components/Header'
import List from './Components/List'
import circleFire from './assets/circulo-de-fogo.jpg'



export default class App extends Component{
  state = {
    modal: false,
    movies:[],
  }

  getValues = (movie) => {
    this.state.movies.push(movie)
  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render(){
    return (
      <div className="App">
        <Header openModal={this.openModal}/>
        {this.state.modal && <Modal openModal={this.openModal} getValues={this.getValues}/>}
        <div className="banner">
          <img src={circleFire} className="imageBanner"/>
        </div>
        <List movies={this.state.movies}/>
        
      </div>
    );
  }

}


