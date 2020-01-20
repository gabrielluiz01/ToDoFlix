import React, { Component } from 'react';
import '../../App.css'
import styled, { css }from 'styled-components';
import {MyList, ListBlock, BlockFilmes, Notes, ImageMovie, Title, Description} from './styles'
import {JaVisto, QueroVer} from '../Header/styles'






export default class List extends Component {

  state = {
    movie: '',
  }

  changeStatus = () => {
    this.props.Watched(this.state.movie)
    this.setState({
      movie:  <BlockFilmes>
      <Notes>
        {this.props.note}.0
      </Notes>
      <ImageMovie src={require('../../assets/bacurau.jpg')} onClick={this.changeStatus}/>
      <JaVisto>Já vi</JaVisto>  
      <div>
        <Title>{this.props.title}</Title>

        <Description>{this.props.description}</Description>
      </div>
    </BlockFilmes>
    })
  }


  render() {
    
    return(
      <MyList>
        <h1>Minha lista:</h1>
        <ListBlock>
          <BlockFilmes>
            <Notes>
              {this.props.note}.0
            </Notes>
            <ImageMovie src={require('../../assets/bacurau.jpg')} onClick={this.changeStatus}/>
            {this.props.status}  
            <div>
              <Title>{this.props.title}</Title>

              <Description>{this.props.description}</Description>
            </div>
          </BlockFilmes>

          <BlockFilmes>
            <Notes>
              {this.props.note}.0
            </Notes>
            <ImageMovie src={require('../../assets/corra.jpg')}/>
            {this.props.status}
            <div>
              <Title>{this.props.title}</Title>
              <Description>{this.props.description}</Description>
            </div>
          </BlockFilmes>
        </ListBlock>
      </MyList>
    )
  }
}
