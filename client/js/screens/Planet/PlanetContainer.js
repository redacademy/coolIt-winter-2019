import React, {Component} from "react";
import Planet from "./Planet";
import PropTypes from "prop-types";

class PlanetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 0
    };
  }

  componentDidMount() {
    const getPrizesAmount = point => {
      const a = Math.floor(point / 200);
      this.setState({icon: a});
    };
    getPrizesAmount(3000);
  }

  render() {
    const contentIcons = [
      require("../../assets/icons/bigtree.png"),
      require("../../assets/icons/circle-flower.png"),
      require("../../assets/icons/circle-mountain.png"),
      require("../../assets/icons/circle-tree.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png"),
      require("../../assets/icons/lock.png")
    ];

    return <Planet icons={contentIcons} />;
  }
}

PlanetContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PlanetContainer;
