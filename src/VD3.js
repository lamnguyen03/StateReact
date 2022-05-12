import React, { Component } from 'react'

export default class VD3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     brand:"Ford",
     model:"Mustang ",
     color:"red ",
     year:"1994"
    };
  }
  changeColor=()=>{
    this.setState({color:"Blue "})
  }
  render() {
    return <div>
        <h1>My {this.state.brand}</h1>
        <p>
            It is a {this.state.color }
            {this.state.model} 
            from {this.state.year}
        </p>
        <button type='button ' onClick={this.changeColor}>Change Color</button>
    </div>;
  }
}
