import React from "react";
import { View, Text } from "react-native";

const Impact = ({ data }) => {
  return (
    <View>
      <Text>{data.allUsers[0].point}</Text>
      <Text> Hi im impact</Text>
    </View>
  );
};

export default Impact;
