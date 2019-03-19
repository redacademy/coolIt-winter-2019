import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import { withNavigation } from "react-navigation";
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
        onPress={() => {}}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Disconnet from Cool It Program"
        onPress={() => {}}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Deactivate Account"
        onPress={() => {}}
      />
      <Button
        style={{ borderStyle: "solid", borderWidth: "1" }}
        title="Sign Out"
        onPress={_signOutAsync}
      />
    </View>
  );
};

export default withNavigation(Accounts);
