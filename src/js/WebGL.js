import React from "react";
import { hot } from "react-hot-loader/root";
import init from "./init/index";

class WebGL extends React.Component {
  componentDidMount() {
    init("webgl");
  }

  render() {
    // const { name } = this.props;
    return (
      <canvas
        id="webgl"
        width="400px"
        height="400px"
        style={{
          border: "1px solid red",
          justifyContent: "center",
          alignItems: "center"
        }}
      ></canvas>
    );
  }
}

export default hot(WebGL);
