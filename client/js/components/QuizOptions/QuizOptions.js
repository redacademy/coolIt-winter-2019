import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuizOptions = props => {
  console.log(props.data);
  return props.data.map(option => (
    <View
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        borderWidth: 0.5,
        borderRadius: 10
      }}
    >
      <TouchableOpacity>
        <Text>{option.option}</Text>
      </TouchableOpacity>
    </View>
  ));
};

export default QuizOptions;
