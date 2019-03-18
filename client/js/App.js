import React, {Component} from "react";
import {StatusBar} from "react-native";
import TakeQuiz from "./screens/TakeQuiz";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <TakeQuiz />
    );
  }
}
