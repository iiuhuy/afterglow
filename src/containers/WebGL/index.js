import React, { Component } from "react";

export default class WebGL extends Component {
  render() {
    return (
      <canvas
        id="webgl"
        width="400"
        height="400"
        style={{ border: "1px solid black" }}
      ></canvas>
    );
  }
}
