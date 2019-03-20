import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";
import QuizOptions from "../QuizOptions/QuizOptions";

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
              <QuizOptions
                data={question.options}
                userSelectionHandler={this.props.userSelectionHandler}
                question={question.question}
              />
            </View>
          </View>
        ))}
      </View>
    );
  }
}
