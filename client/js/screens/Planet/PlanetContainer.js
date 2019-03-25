import React, {Component} from "react";
import Planet from "./Planet";

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
    const icons = [
      require("../../assets/icons/baby-tree.png"),
      require("../../assets/icons/flower.png"),
      require("../../assets/icons/mountain.png"),
      require("../../assets/icons/tree.png"),
      require("../../assets/icons/baby-tree.png"),
      require("../../assets/icons/flower.png"),
      require("../../assets/icons/mountain.png"),
      require("../../assets/icons/tree.png"),
      require("../../assets/icons/baby-tree.png"),
      require("../../assets/icons/flower.png"),
      require("../../assets/icons/mountain.png"),
      require("../../assets/icons/tree.png"),
      require("../../assets/icons/baby-tree.png"),
      require("../../assets/icons/flower.png"),
      require("../../assets/icons/mountain.png")
    ];

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

    const mapIcons = icons.slice(0, this.state.icon);

    return <Planet data={mapIcons} icons={contentIcons} />;
  }
}

export default PlanetContainer;
