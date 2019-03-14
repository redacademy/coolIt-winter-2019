import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";

const Accounts = props => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  return (
    <View>
      <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
    </View>
  );
};

export default Accounts;
