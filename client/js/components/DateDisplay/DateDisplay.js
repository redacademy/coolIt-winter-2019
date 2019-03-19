import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

export const DateDisplay = props => {
  const today = new Date();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          let previousDay = new Date();
          previousDay.setDate(props.date.getDate() - 1);
          props.dateHandler(previousDay);
        }}
      >
        <Icon name={"ios-arrow-dropleft"} />
      </TouchableOpacity>

      <Text>{moment(props.date).format("MMMM Do")}</Text>
      <TouchableOpacity
        onPress={() => {
          let nextDay = new Date();
          nextDay.setDate(props.date.getDate() + 1);
          props.dateHandler(nextDay);
        }}
      >
        <Icon name={"ios-arrow-dropright"} />
      </TouchableOpacity>
    </View>
  );
};
