import React, {Component} from "react";
import TakeQuiz from "./TakeQuiz";
import PropTypes from "prop-types";

export default class TakeQuizContainer extends Component {
  render() {
    return <TakeQuiz navigation={this.props.navigation} />;
  }
}

TakeQuizContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
