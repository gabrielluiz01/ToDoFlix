import React, { Component } from 'react';
import '../../App.css'
import styled, { css }from 'styled-components';
import {MyList, ListBlock, BlockFilmes, Notes, ImageMovie, Title, Description, Block} from './styles'
import {JaVisto, QueroVer} from '../Header/styles'
import Corra from '../../assets/corra.jpg'
import Bacurau from '../../assets/bacurau.jpg'






export default class List extends Component {

  state = {
    movie: '',
  }

  changeStatus = () => {
    this.props.Watched(this.state.movie)
    this.setState({
      movie:  <ListBlock>
         {this.props.lista.map((items) => {
            return(
              <BlockFilmes>
                <Notes>{items.note}</Notes>
                  <Block>{this.props.image}</Block>
                  <span onClick={this.changeStatus}>{items.status}</span>
                <Title onClick={this.changeStatus}>{items.title}</Title>
                <Description>{items.description}</Description>
              </BlockFilmes>
            )
          })}
    </ListBlock>
    })
  }


  render() {
    
    return(
      <MyList>
        <h1>Minha lista:</h1>
        <ListBlock>
          {this.props.lista.map((items) => {
            return(
              <BlockFilmes>
                <Notes>{items.note}</Notes>
                  <Block>{this.props.image}</Block>
                  <span onClick={this.changeStatus}>{items.status}</span>
                <Title onClick={this.changeStatus}>{items.title}</Title>
                <Description>{items.description}</Description>
              </BlockFilmes>
            )
          })}
        </ListBlock>
      </MyList>
    )
  }
}
