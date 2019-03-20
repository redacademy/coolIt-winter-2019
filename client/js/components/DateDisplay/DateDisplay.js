import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

export const DateDisplay = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItem: "center"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.dateChangeHandler(false);
        }}
      >
        <Icon name={"ios-arrow-dropleft"} />
      </TouchableOpacity>
      <Text>{moment().format("MMMM Do")}</Text>
      <TouchableOpacity
        onPress={() => {
          props.dateChangeHandler(true);
        }}
      >
        <Icon name={"ios-arrow-dropright"} />
      </TouchableOpacity>
    </View>
  );
};
