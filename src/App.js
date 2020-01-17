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

  handleUpload = () => {
    const {uploadedFiles} = this.state;

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })
    console.log(this.state.uploadedFiles)
  }

  addList = (title, description, status) => {
    this.setState({
      list:{
        title: title,
        description: description,
        status: status,
      }
    })
  }



  renderScreen = () => {
    switch(this.state.currentScreen){
      case 'watched':
        return <Watched/>
      case 'list':
        default:
        return <List addList={this.addList}/>
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
        <Header  handleStateScreen={this.handleStateScreen} addList={this.addList} handleUpload={this.handleUpload}/>
        <div className="banner">
          <img src={require('./assets/banner.jpg')}/>
        </div>
        {this.renderScreen()}         
        
                

      </div>
    );
  }

}


