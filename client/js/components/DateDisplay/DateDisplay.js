import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { colors } from "../../config/styles";

export const DateDisplay = props => {
  return (
    <View style={styles.date}>
      <TouchableOpacity
        onPress={() => {
          props.dateChangeHandler(-1);
        }}
      >
        <Icon
          style={styles.leftIcon}
          size={30}
          name={"ios-arrow-back"}
          color={colors.gray}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.dateChangeHandler(0);
        }}
      >
        <Text style={styles.dateDisplay}>
          {moment(props.date).format("dddd, MMMM Do")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.dateChangeHandler(1);
        }}
      >
        <Icon
          style={styles.rightIcon}
          size={30}
          name={"ios-arrow-forward"}
          color={colors.gray}
        />
      </TouchableOpacity>
    </View>
  );
};
