import React, {Component} from "react";
import TakeQuiz from "./TakeQuiz";

export default class TakeQuizContainer extends Component {
  render() {
    return <TakeQuiz navigation={this.props.navigation} />;
  }
}
