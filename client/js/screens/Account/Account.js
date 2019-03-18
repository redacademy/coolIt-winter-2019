import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";

const Accounts = props => {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View>
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Change Password"
        onPress={_signOutAsync}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Disconnet from Cool It Program"
        onPress={_signOutAsync}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Deactivate Account"
        onPress={_signOutAsync}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Sign Out"
        onPress={_signOutAsync}
      />
    </View>
  );
};

export default Accounts;
