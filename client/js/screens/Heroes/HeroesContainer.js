import React, {Component} from "react";
import Heroes from "./Heroes";
import PropTypes from "prop-types";

class HeroesContainer extends Component {
  render() {
    const allHeroes = [
      {
        id: 1,
        point: 2000,
        name: "Tim",
        programCode: "12345"
      },
      {
        id: 2,
        point: 1000,
        name: "Steve",
        programCode: "12345"
      },
      {
        id: 3,
        point: 500,
        name: "Victor",
        programCode: "12345"
      },
      {
        id: 4,
        point: 1500,
        name: "Sophie",
        programCode: "12345"
      },
      {id: 5, point: 400, name: "Jen", programCode: "12345"},
      {id: 6, point: 300, name: "Jennifer", programCode: "12345"},
      {id: 7, point: 500, name: "Alex", programCode: "12344"}
    ];
    const currentUser = {
      programCode: "12345"
    };

    const leaderHeroes = allHeroes
      .filter(heroes => heroes.programCode === currentUser.programCode)
      .sort((a, b) => b.point - a.point)
      .slice(0, 5);

    return <Heroes data={leaderHeroes} />;
  }
}

HeroesContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default HeroesContainer;
