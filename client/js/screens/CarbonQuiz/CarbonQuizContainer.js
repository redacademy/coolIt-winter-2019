import React, { Component } from "react";
import CarbonQuiz from "./CarbonQuiz";
const quizData = require("./Quiz.json");
export default class CarbonQuizContainer extends Component {
  render() {
    return <CarbonQuiz data={quizData} />;
  }
}
