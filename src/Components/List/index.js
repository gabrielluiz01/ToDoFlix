import React, { Component } from 'react';
import '../../App.css'
import styled from 'styled-components';
import Fratura from '../../assets/fratura.jpg'
import invencivel from '../../assets/invencivel.webp'


const MyList = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1rem;

  h1{
    font-size: 30px;
  }
`;

const ListBlock = styled.div `
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

const BlockFilmes = styled.div `
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 1rem 0;

  @media(max-width: 768px){
    width: 60%;
    display: flex;
    align-items: center;
  }
  @media(max-width: 425px){
    width: 100%;
  }
`;

const Note = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #75A9A4;
  color: #fff;
`;



const ImageMovie = styled.img `
  width: 200px;
  height: 220px;
`;

const Title = styled.p `
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  min-width: 70%;

  @media(max-width: 768px){
    max-width: 100%;
    text-align: left
  }
  @media(max-width: 375px){
    width: 100%;
    text-align: left;
  }
`;

const Description = styled.p `
  width: 70%;
  text-align: left;
  color: #9d9e9e;

  @media(max-width: 375px){
    width: 100%;
  }
`;

export default class List extends Component {

  state = {
    images: [],
    title: [this.props.title],
    description: [this.props.description],
  }

  log = (ev) => {
    console.log(this.state.title)
    console.log(this.state.description)
  }



  render() {
    
    const {title, description} = this.state;

    return(
      <div>
        <h1>Minha lista:</h1>
        
        <BlockFilmes>
          <ImageMovie src={require('../../assets/bacurau.jpg')}/>
          {this.props.status}  
            <Title>{this.props.title.map(title =>{
              return(
                <li key={title}>{title}</li>
              )
            })}</Title>

            <Description>{this.props.description.map(description => {
              return(
                <p>{description}</p>
              )
            })}</Description>
        </BlockFilmes>

        <button onClick={this.log}>LOG</button>
      </div>
    )
  }
}
