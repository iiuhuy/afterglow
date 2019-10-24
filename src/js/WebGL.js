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
        width="800px"
        height="800px"
        style={{ border: "1px solid red" }}
      ></canvas>
    );
  }
}

export default hot(WebGL);
