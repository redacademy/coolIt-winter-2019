import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("token");

    this.props.navigation.navigate(userToken ? "Activities" : "Auth");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
