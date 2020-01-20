import React, { Component } from 'react';
import '../../App.css'
import styled, { css }from 'styled-components';
import {MyList, ListBlock, BlockFilmes, Notes, ImageMovie, Title, Description} from './styles'
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
      movie:  <BlockFilmes>
      <Notes>
        {this.props.note}.0
      </Notes>
      <ImageMovie src={require()} onClick={this.changeStatus}/>
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
              5.0
            </Notes>
            <ImageMovie src={Corra} onClick={this.changeStatus}/>
            <JaVisto>Já vi</JaVisto>  
            <div>
              <Title>
                Corra
              </Title>

              <Description>
                Um jovem fotógrafo descobre um segredo sombrio quando conhece os pais aparentemente amigáveis da sua namorada.
              </Description>
            </div>
          </BlockFilmes>

          <BlockFilmes>
            <Notes>
              {this.props.note}.0
            </Notes>
            <ImageMovie src={Bacurau}/>
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
