import React, {Component} from "react";
import BeginChallenge from "./BeginChallenge";

export default class BeginChallengeContainer extends Component {
  render() {
    return <BeginChallenge navigation={this.props.navigation} />;
  }
}
