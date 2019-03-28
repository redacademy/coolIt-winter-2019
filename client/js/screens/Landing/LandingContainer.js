import React, {Component} from "react";
import Landing from "./Landing";
import PropTypes from "prop-types";

export default class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }
  checkBox = () => {
    this.setState({checked: !this.state.checked});
  };
  render() {
    return (
      <Landing
        checked={this.state.checked}
        checkBox={this.checkBox}
        navigation={this.props.navigation}
      />
    );
  }
}

LandingContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
