import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

export default class QuizSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    const optionSelectedStyle = this.state.selected
      ? styles.selected
      : styles.normal;
    return (
      <ScrollView>
        {this.props.data.map((question, index) => (
          <View key={index}>
            <Text key={index}>{question.question}</Text>
            <View>
              {question.options.map((option, index) => (
                <View
                  style={{
                    paddingTop: 15,
                    paddingBottom: 15,
                    borderWidth: 0.5,
                    borderRadius: 10
                  }}
                  key={index}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        selected: true
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
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
