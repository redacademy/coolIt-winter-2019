import React, {Component} from "react";
import {StatusBar} from "react-native";
import ProgramCode from './js/screens/ProgramCode'

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("light-content", true);
    return (
      <ProgramCode />
    );
  }
}
