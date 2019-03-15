import React, {Component} from "react";
import Planet from "./Planet";

class PlanetContainer extends Component {
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

    const getPrizesAmount = point => {
      if (point >= 3000) {
        return 15;
      } else if (point >= 2800) {
        return 14;
      } else if (point >= 2600) {
        return 13;
      } else if (point >= 2400) {
        return 12;
      } else if (point >= 2200) {
        return 11;
      } else if (point >= 2000) {
        return 10;
      } else if (point >= 1800) {
        return 9;
      } else if (point >= 1600) {
        return 8;
      } else if (point >= 1400) {
        return 7;
      } else if (point >= 1200) {
        return 6;
      } else if (point >= 1000) {
        return 5;
      } else if (point >= 800) {
        return 4;
      } else if (point >= 600) {
        return 3;
      } else if (point >= 400) {
        return 2;
      } else if (point >= 200) {
        return 1;
      } else {
        return 0;
      }
    };

    const oneIcon = icons.slice(0, 1);

    const twoIcons = icons.slice(0, 2);

    const threeIcons = icons.slice(0, 15);

    console.log(oneIcon);

    console.log(twoIcons);

    console.log(threeIcons);

    return <Planet data={threeIcons} />;
  }
}

PlanetContainer.propTypes = {};

export default PlanetContainer;
