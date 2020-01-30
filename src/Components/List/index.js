import React, { Component } from 'react';
import './style.css'
import capitaoFantastico from '../../assets/fantastico.jpg'

export default class List extends Component {
  render() {
    return(
       <section className="containerMovies">
          <h1>Minha Lista</h1>
          <div className="blockMovies">
             <div className="imageMovie">
                <div className="notesHigh">
                   <p className="notes-text">5</p>
                </div>
               <img src={capitaoFantastico}/>
               <h1>Capitão Fantástico</h1>
               <p className="movieDescription">Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras.</p>
             </div>
            {this.props.movies.map(items =>{
            return(
               <div className="imageMovie">
               {items.image}
               <h1>{items.title}</h1>
               <p className="movieDescription">{items.description}</p>
               </div>
            )
            })}
          </div>

       </section>
    );
  }
}
