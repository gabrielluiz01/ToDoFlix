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
`;

const BlockFilmes = styled.div `
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 1rem 0;
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

const Status = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  background: #75a9a4;
  color: #fff;
  margin-bottom: 1rem;
`;

const JaVisto = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  background: #F0C18B;
  color: #fff;
  margin-bottom: 1rem;
`;

const ImageMovie = styled.img `
  width: 300px;
  height: 200px;
`;

const Title = styled.p `
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p `
  width: 70%;
  text-align: left;
  color: #9d9e9e;
`;

export default class List extends Component {

  state = {
    myList: {
      images: [ ],
      title: [ ],
      description: [ ]
    }
  }


  render() {
    return(
      <MyList>
        <h1>Minha lista:</h1>
        <ListBlock>
          <BlockFilmes>
            <ImageMovie src={require('../../assets/jurassic-park.webp')}/>
            <Status>
              <p>Quero ver</p>
            </Status>
              <Title>Jurassic Park: O Mundo Perdido</Title>
              <Description>John Hammond chama o teórico do caos Ian Malcolm à sua casa para dar algumas notícias aterradoras: enquanto quase tudo em Jurassic Park foi destruído, seus engenheiros parecem ter um segundo local, onde outros dinossauros estão escondidos. Aparentemente, os dinossauros na segunda ilha estão vivos e bem e até se acasalando. Hammond quer que Malcolm observe e documente as criaturas antes que mercenários cheguem até eles.</Description>
          </BlockFilmes>

          <BlockFilmes>
            <ImageMovie src={require('../../assets/fratura.jpg')}/>
            <JaVisto>
              <p>Ja Visto</p>
            </JaVisto>
              <Title>Fratura</Title>
              <Description>
                Dirigindo pelo país, Ray (Sam Worthington), sua esposa e filha param em uma área de descanso da estrada, onde a filha cai e quebra o braço. Depois de uma corrida frenética para o hospital e um confronto com a enfermeira, Ray finalmente consegue ser atendido.
              </Description>
          </BlockFilmes>
        </ListBlock>

      </MyList>
    );
  }
}
