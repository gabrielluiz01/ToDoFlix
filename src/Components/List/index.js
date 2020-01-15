import React, { Component } from 'react';
import '../../App.css'
import styled from 'styled-components';
import Fratura from '../../assets/fratura.jpg'
import invencivel from '../../assets/invencivel.webp'

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
       <div>
         {this.state.myList.title.map(title =>{
           return(
             <p>{title}</p>
           )
         })}


       </div>
    );
  }
}
