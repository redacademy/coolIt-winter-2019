import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Impact = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.navigation.navigate("Score")}>
        <Text> Hi im impact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Impact;
