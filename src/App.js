import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";

import "./App.css";

class App extends Component {
  state = {
    userA: {
      firstName: "Kelly Yu",
      avatarUrl: "../images/user-a.jpg",
    },
    userB: {
      firstName: "Christine Chen",
      avatarUrl: "../images/user-b.jpg",
    },
    clickCount: 0,
    backColor: "yellow",
    bootcamp: "Ironhack",
  };

  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    if (this.state.clickCount % 5 === 4) {
      const newColor = this.colorMapper();
      const updatedCount = this.state.clickCount + 1;

      // Use `this.setState()` to update the state object
      this.setState({ clickCount: updatedCount, backColor: newColor });
    } else {
      const updatedCount = this.state.clickCount + 1;
      this.setState({ clickCount: updatedCount });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <h1 className="text-center">React - state</h1>
        <p className="text-center text-bold">Count is: {this.state.clickCount}</p>
        <button className="text-center" onClick={this.clickHandler}>
          {" "}
          Click me{" "}
        </button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcampName={this.state.bootcamp}
        />
        <br />
        <User
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcampName={this.state.bootcamp}
        />
      </div>
    );
  }
}

export default App;
