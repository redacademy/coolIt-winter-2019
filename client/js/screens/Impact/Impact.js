import React from "react";
import { View, Text } from "react-native";

const Accounts = ({ data }) => {
  return (
    <View>
      <Text>
        {data.email},{data.point}
      </Text>
      <Text> Hi im impact</Text>
    </View>
  );
};

export default Accounts;
