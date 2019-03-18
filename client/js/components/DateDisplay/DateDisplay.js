import React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

export const DateDisplay = props => {
  const today = new Date();

  return (
    <View>
      <Icon name={"ios-arrow-dropleft"} />
      <Text>{moment(today).format("MMMM Do")}</Text>
      <Icon name={"ios-arrow-dropright"} />
    </View>
  );
};
