import React, { Component } from 'react';
import './App.css';
import List from './Components/List'
import Watched from './Components/Watched'
import Header from './Components/Header'
import styled from 'styled-components';


export default class App extends Component{

  state = {
    currentScreen: 'list',
    lista:[
      {
      title: '',
      description: '',
      status: '',
      note: '',   
    }
  ],
    imagePreviewUrl: null,
    movie: '',
  }



  addMovie = (title, description, status, note, imagePreviewUrl) => {
    this.setState({
      lista:[{
          title: title,
          description: description,
          status: status,
          note: note,
        }],
        imagePreviewUrl: imagePreviewUrl,
    })
  }

  Watched = (movie) =>{
    this.setState({
      movie: movie
    })
  }




  renderScreen = () => {
    switch(this.state.currentScreen){
      case 'watched':
        return <Watched movie={this.state.movie} image={this.state.imagePreviewUrl} note={this.state.lista.note}/>
      case 'list':
        default:
        return <List  lista={this.state.lista} Watched={this.Watched} image={this.state.imagePreviewUrl}/>
    }
  }

  handleStateScreen = (screen) => {
    this.setState({
      currentScreen: screen,
    })
  }




  render(){
    return (
      <div className="App">
        <Header  handleStateScreen={this.handleStateScreen} addMovie={this.addMovie} Watched={this.Watched}/>
        <div className="banner">
          <img src={require('./assets/banner.jpg')}/>
        </div>
        {this.renderScreen()}           
      </div>
    );
  }

}


