import React from "react";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <div>Hello Template {name}</div>;
  }
}

export default hot(App);
