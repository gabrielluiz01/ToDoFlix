import React, { Component } from 'react';
import './App.css';
import List from './Components/List'
import Watched from './Components/Watched'
import Header from './Components/Header'
import styled from 'styled-components';


export default class App extends Component{

  state = {
    currentScreen: 'list',
    list:{
      title: [],
      description: [],
      status: [],
      image: [],
      note: '', 
    },
    movie: '',
    uploadedFiles: [],

  }



  addMovie = (title, description, status, note, titleValue) => {
    this.setState({
      list:{
        title: title,
        description: description,
        status: status,
        note: note,
      }
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
        return <Watched movie={this.state.movie}/>
      case 'list':
        default:
        return <List title={this.state.list.title} description={this.state.list.description} status={this.state.list.status} note={this.state.list.note} Watched={this.Watched}/>
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


