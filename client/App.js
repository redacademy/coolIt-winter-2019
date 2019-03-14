import React, {Component} from "react";
import Score from './js/screens/Score'
import {StatusBar} from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <Score />
    );
  }
}
