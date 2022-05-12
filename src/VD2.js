import React, { Component } from 'react'

export default class VD2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Nguyen Thanh Lam PNV23A",
        age: "20",
      };
  }
  render() {
    return (
      <div>
        <h1>Tên của bạn là: {this.state.name}</h1>
        <h1>Tuổi: {this.state.age}</h1>
      </div>
    );
  }
}
