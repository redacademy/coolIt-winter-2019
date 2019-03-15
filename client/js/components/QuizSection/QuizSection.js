import React from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
// import QuizOptions from "../../components/QuizOptions";

const QuizSection = props => {
  return (
    <ScrollView>
      {props.data.map(question => (
        <View>
          <Text>{question.question}</Text>
          <View>
            {question.options.map(option => (
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
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default QuizSection;
