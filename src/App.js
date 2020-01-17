import React, { Component } from 'react';
import './App.css';
import List from './Components/List'
import Watched from './Components/Watched'
import Header from './Components/Header'
import styled from 'styled-components';
import fratura from './assets/fratura.jpg'
import eli from './assets/eli.jpg'



export default class App extends Component{

  state = {
    currentScreen: 'list',
    list:{
      title: [],
      description: [],
      status: [],
      image: []  
    },
    uploadedFiles: [],

  }



  addMovie = (title, description, status) => {
    this.setState({
      list:{
        title: title,
        description: description,
      }
    })
  }




  renderScreen = () => {
    switch(this.state.currentScreen){
      case 'watched':
        return <Watched/>
      case 'list':
        default:
        return <List title={this.state.list.title} description={this.state.list.description}/>
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
        <Header  handleStateScreen={this.handleStateScreen} addMovie={this.addMovie} />
        <div className="banner">
          <img src={require('./assets/banner.jpg')}/>
        </div>
        {this.renderScreen()}         
        
                

      </div>
    );
  }

}


