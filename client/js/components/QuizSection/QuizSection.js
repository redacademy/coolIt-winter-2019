import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

export default class QuizSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    console.log(this.state.selected);
    return (
      <View style={{ paddingHorizontal: 15 }}>
        {this.props.data.map((question, index) => (
          <View style={{ paddingBottom: 15 }} key={index}>
            <Text style={{ paddingBottom: 10, fontWeight: "bold" }} key={index}>
              {question.question}
            </Text>
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
                      <Text style={{ paddingLeft: 10 }} key={index}>
                        {option.option}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    );
  }
}
