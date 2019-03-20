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
    return (
      <View style={styles.contentContainer}>
        {this.props.data.map((question, index) => (
          <View style={styles.questionContainer} key={index}>
            <Text style={styles.questionText} key={index}>
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
