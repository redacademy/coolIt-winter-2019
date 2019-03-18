import React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
export const DateDisplay = props => {
  return (
    <View>
      <Icon name={"ios-arrow-dropleft"} />
      <Text>{moment().format("MMMM Do")}</Text>
      <Icon name={"ios-arrow-dropright"} />
    </View>
  );
};
