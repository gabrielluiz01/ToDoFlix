import React, { Component } from 'react';
import '../../App.css'
import styled from 'styled-components';
import {MyList, ListBlock, BlockFilmes, Notes, ImageMovie, Title, Description} from '../List/styles'
import {JaVisto, QueroVer, InputModal} from '../Header/styles'

export default class Watched extends Component {
  render() {
    return(
      <MyList>
      <h1>Já Vistos:</h1>
        {this.props.movie}
    </MyList>
    );
  }
}
