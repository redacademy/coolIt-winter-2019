import React, { Component } from "react";
import { View, Text } from "react-native";
import { ViewPager } from "rn-viewpager";
import styles from "./styles";

import StepIndicator from "react-native-step-indicator";

// const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];

const firstIndicatorStyles = {
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

// const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
//   const iconConfig = {
//     name: "feed",
//     color: stepStatus === "finished" ? "#ffffff" : "#fe7013",
//     size: 15
//   };
//   switch (position) {
//     case 0: {
//       iconConfig.name = "shopping-cart";
//       break;
//     }
//     case 1: {
//       iconConfig.name = "location-on";
//       break;
//     }
//     case 2: {
//       iconConfig.name = "assessment";
//       break;
//     }
//     case 3: {
//       iconConfig.name = "payment";
//       break;
//     }
//     case 4: {
//       iconConfig.name = "track-changes";
//       break;
//     }
//     default: {
//       break;
//     }
//   }
//   return iconConfig;
// };

export default class CarbonQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage);
      }
    }
  }

  render() {
    const group1 = this.props.data.questions.slice(0, 5);
    const group2 = this.props.data.questions.slice(5, 10);
    const group3 = this.props.data.questions.slice(10, 15);
    const group4 = this.props.data.questions.slice(15, 20);
    const group5 = this.props.data.questions.slice(20, 25);
    console.log(this.props);
    console.log(group1);
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={["Part 1", "Part 2", "Part 3", "Part 4", "Part 5"]}
          />
        </View>

        <ViewPager
          // scrollEnabled={false}
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
        </ViewPager>
      </View>
    );
  }

  renderViewPagerPage = questions => {
    console.log(questions);
    return (
      <View style={styles.page}>
        <Text>{questions.map(question => question.question)}</Text>
        {/* <Text>a.{questions.options.map(option => option.a)}</Text>
        <Text>b.{questions.options.map(option => option.b)}</Text>
        <Text>c.{questions.options.map(option => option.c)}</Text>
        <Text>d.{questions.options.map(option => option.d)}</Text> */}
      </View>
    );
  };

  // renderStepIndicator = params => (
  //   <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  // );
}
