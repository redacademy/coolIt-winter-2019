import React, {Component} from "react";
import ProgramCode from "./ProgramCode";
import PropTypes from "prop-types";

export default class ProgramCodeContainer extends Component {
  render() {
    let data = this.props.navigation.getParam("data");
    return <ProgramCode data={data} navigation={this.props.navigation} />;
  }
}

ProgramCodeContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
