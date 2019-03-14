import React, {Component} from "react";
import BeginChallenge from './js/screens/BeginChallenge'
import {StatusBar} from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <BeginChallenge />
    );
  }
}
