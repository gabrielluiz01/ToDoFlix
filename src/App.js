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
    }
  
  }


  addList = (title, description, status) => {
    this.setState({
      list:{
        title: ([...title]),
        description: ([...description]),
        status: ([...status]),
      }
    })
  }

  renderScreen = () => {
    switch(this.state.currentScreen){
      case 'watched':
        return <Watched/>
      case 'list':
        default:
        return <List/>
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
        <Header  handleStateScreen={this.handleStateScreen} addList={this.addList}/>
        {this.renderScreen()}
      </div>
    );
  }

}


