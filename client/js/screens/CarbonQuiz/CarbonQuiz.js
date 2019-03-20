import React, { Component, createRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { ViewPager } from "rn-viewpager";
import styles from "./styles";
import QuizSection from "../../components/QuizSection";
import StepIndicator from "react-native-step-indicator";

const StepIndicatorStyles = {
  stepIndicatorSize: 30,

  stepStrokeCurrentColor: "#6F9C41",
  stepStrokeFinishedColor: "#4F6638",
  stepStrokeUnFinishedColor: "#4F6638",
  stepStrokeWidth: 2,

  currentStepIndicatorSize: 40,

  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4F6638",
  separatorUnFinishedColor: "#4F6638",

  stepIndicatorFinishedColor: "#ffffff",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#4F6638",
  stepIndicatorLabelFontSize: 15,

  currentStepIndicatorLabelFontSize: 15,

  currentStepLabelColor: "#4F6638",
  stepIndicatorLabelFinishedColor: "#4F6638",
  stepIndicatorLabelUnFinishedColor: "#4F6638",
  stepIndicatorLabelCurrentColor: "#ffffff"
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
        <ImageBackground
          source={require("../../assets/images/background2-top.png")}
          style={{ width: 379, height: 133 }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingLeft: 10,
                paddingBottom: 10,
                paddingTop: 40
              }}
            >
              Carbon Quiz
            </Text>
            <Text style={{ paddingLeft: 10, width: 275, color: "grey" }}>
              Choose one answer for each of the following that best fits your
              travel habits.
            </Text>
          </View>
        </ImageBackground>
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
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage + 1 });
                  this.viewPager.setPage(this.state.currentPage + 1);
                }}
              >
                <Text style={styles.buttonText}>next</Text>
              </TouchableOpacity>
            </View>
          ) : this.state.currentPage === 5 ? (
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage - 1 });
                  this.viewPager.setPage(this.state.currentPage - 1);
                }}
              >
                <Text style={styles.buttonText}>back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={disabledSubmit ? styles.disabledButton : styles.button}
                onPress={() => {
                  console.log(handleSubmit);
                }}
                disabled={disabledSubmit}
              >
                <Text style={styles.buttonText}>submit</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flex: 0,
                flexDirection: "row-reverse",
                justifyContent: "space-around"
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage + 1 });
                  this.viewPager.setPage(this.state.currentPage + 1);
                }}
              >
                <Text style={styles.buttonText}>next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ currentPage: this.state.currentPage - 1 });
                  this.viewPager.setPage(this.state.currentPage - 1);
                }}
              >
                <Text style={styles.buttonText}>back</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    );
  };
}
