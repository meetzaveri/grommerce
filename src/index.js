import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./scss";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>This is {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

let App = document.getElementById("root");

ReactDOM.render(<HelloMessage name="grommerce" />, App);
