import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

export default class QuizSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  // selectionStyleHandler = obj => {};

  render() {
    console.log(this.state.selected);
    return (
      <ScrollView>
        {this.props.data.map((question, index) => (
          <View key={index}>
            <Text key={index}>{question.question}</Text>
            <View>
              {question.options.map((option, index) => {
                const optionSelectedStyle =
                  this.state.selected === option.option
                    ? styles.selected
                    : styles.normal;
                return (
                  <View key={index}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          //how to toggle the state to false when i select a different option
                          selected: option.option
                        });
                        this.props.userSelectionHandler({
                          question: question.question,
                          point: option.points
                        });
                      }}
                      key={index}
                      style={optionSelectedStyle}
                    >
                      <Text key={index}>{option.option}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
