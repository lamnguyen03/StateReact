import React, { Component } from 'react'

export default class One extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ textAlign: "center" }}>
            <img src="{this.props.img}" alt="" />
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
