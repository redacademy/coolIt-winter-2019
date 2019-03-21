import React, {Component} from "react";
import client from "../js//config/api";
import {ApolloProvider} from "react-apollo";
import RootStackNavigator from "../js/navigation/RootStackNavigator";
import {StatusBar} from "react-native";

export default class App extends Component {
  render() {
    StatusBar.setBarStyle("dark-content", true);
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
