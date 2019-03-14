import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import styles from "./styles";
// import PropTypes from "prop-types";

export default class JoinUs extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}
