import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import {colors} from "../../config/styles";
import PropTypes from "prop-types";

export const DateDisplay = ({dateChangeHandler, date}) => {
  return (
    <View style={styles.date}>
      <TouchableOpacity
        onPress={() => {
          dateChangeHandler(-1);
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
          dateChangeHandler(0);
        }}
      >
        <Text style={styles.dateDisplay}>
          {moment(date).format("dddd, MMMM Do YYYY")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dateChangeHandler(1);
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

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dateChangeHandler: PropTypes.func.isRequired
};
