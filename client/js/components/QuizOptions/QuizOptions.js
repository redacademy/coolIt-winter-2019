import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

class QuizOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    return this.props.data.map((option, index) => {
      const optionSelectedStyle =
        this.state.selected === option.option ? styles.selected : styles.normal;
      return (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                selected: option.option
              });
              this.props.userSelectionHandler({
                question: this.props.question,
                point: option.points
              });
            }}
            key={index}
            style={optionSelectedStyle}
          >
            <Text style={styles.optionText} key={index}>
              {option.option}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
}

export default QuizOptions;
