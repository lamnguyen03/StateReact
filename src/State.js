import React, { Component } from 'react'
import products_data from './Data'
import One from './One';
export default class State extends Component {
    constructor(){
        super()
        this.state=products_data();
    }
  render() {
    return (
      <div>
          {this.state.map(value=>{
              return{<One im></One>}
          })}
      </div>
      
    )
  }
}
