import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "Nguyen Thanh Lam",
        age: "20",
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Tên của bạn là: {this.state.fields.name}</h1>
        <h1>Tuổi: {this.state.fields.age}</h1>
      </div>
    );
  }
}

export default App;
