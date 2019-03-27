import React from "react";
import LogIn from "./LogIn";
import PropTypes from "prop-types";

const LogInContainer = props => {
  return <LogIn navigation={props.navigation} />;
};
LogInContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default LogInContainer;
