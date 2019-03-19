import React, { Component, createRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ViewPager } from "rn-viewpager";
import styles from "./styles";
import QuizSection from "../../components/QuizSection";
import StepIndicator from "react-native-step-indicator";

const StepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4aae4f",
  separatorUnFinishedColor: "#a4d4a5",
  stepIndicatorFinishedColor: "#4aae4f",
  stepIndicatorUnFinishedColor: "#a4d4a5",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#4aae4f"
};

export default class CarbonQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      totalPoints: 0,
      selected: null,
      userSelection: []
    };
    this.viewPager = createRef();
  }

  userSelectionHandler = obj => {
    const question = () => {
      return obj.question;
    };

    let answered = this.state.userSelection.findIndex(
      selection => selection.question === question()
    );
    const updatedQuestion = this.state.userSelection;

    if (answered >= 0) {
      updatedQuestion[answered].point = obj.point;
      this.setState({ userSelection: updatedQuestion });
    } else {
      this.setState({ userSelection: [...this.state.userSelection, obj] });
    }
  };

  handleSubmit = () => {
    let initialValue = 0;
    return this.state.userSelection.reduce(
      (accumulator, currentValue) => accumulator + currentValue.point,
      initialValue
    );
  };

  render() {
    const group1 = this.props.data.questions.slice(0, 3);
    const group2 = this.props.data.questions.slice(3, 7);
    const group3 = this.props.data.questions.slice(7, 12);
    const group4 = this.props.data.questions.slice(12, 16);
    const group5 = this.props.data.questions.slice(16, 20);
    const group6 = this.props.data.questions.slice(20);

    console.log(this.state.userSelection);

    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 10,
              paddingBottom: 10
            }}
          >
            Carbon Quiz
          </Text>
          <Text style={{ paddingLeft: 10 }}>
            Choose one answer for each of the following that best fits your
            travel habits.
          </Text>
        </View>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={StepIndicatorStyles}
            currentPosition={this.state.currentPage}
            stepCount={6}
          />
        </View>

        <ViewPager
          scrollEnabled={false}
          style={{ flexGrow: 1 }}
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
          onPageSelected={page => {
            this.setState({ currentPage: page.position });
          }}
        >
          {this.renderViewPagerPage(group1)}
          {this.renderViewPagerPage(group2)}
          {this.renderViewPagerPage(group3)}
          {this.renderViewPagerPage(group4)}
          {this.renderViewPagerPage(group5)}
          {this.renderViewPagerPage(group6)}
        </ViewPager>
      </View>
    );
  }

  renderViewPagerPage = section => {
    const disabledSubmit =
      this.state.userSelection.length === 25 ? false : true;
    const handleSubmit = this.handleSubmit();
    return (
      <View>
        <ScrollView>
          <QuizSection
            data={section}
            userSelectionHandler={this.userSelectionHandler}
          />
          {this.state.currentPage === 0 ? (
            <TouchableOpacity
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "center"
              }}
              onPress={() => {
                this.setState({ currentPage: this.state.currentPage + 1 });
                this.viewPager.setPage(this.state.currentPage + 1);
              }}
            >
              <Text>next</Text>
            </TouchableOpacity>
          ) : this.state.currentPage === 5 ? (
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage - 1 });
                  this.viewPager.setPage(this.state.currentPage - 1);
                }}
              >
                <Text>back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log(handleSubmit);
                }}
                disabled={disabledSubmit}
              >
                <Text>submit</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flex: 0,
                flexDirection: "row-reverse",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage + 1 });
                  this.viewPager.setPage(this.state.currentPage + 1);
                }}
              >
                <Text>next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage - 1 });
                  this.viewPager.setPage(this.state.currentPage - 1);
                }}
              >
                <Text>back</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    );
  };
}
