import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import React from "react";
import AccountScreen from "../screens/Account";
import ActivitiesScreen from "../screens/Activities";
import HeroesScreen from "../screens/Heroes";
import ImpactScreen from "../screens/Impact";
import PlanetScreen from "../screens/Planet";
import {Image} from "react-native";

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  {
    headerMode: "none"
  }
);
const ActivitiesStack = createStackNavigator(
  {
    Activities: ActivitiesScreen
  },
  {
    headerMode: "none"
  }
);
const HeroesStack = createStackNavigator(
  {
    Heroes: HeroesScreen
  },
  {
    headerMode: "none"
  }
);
const ImpactStack = createStackNavigator(
  {
    Impact: ImpactScreen
  },
  {
    headerMode: "none"
  }
);
const PlanetStack = createStackNavigator(
  {
    Planet: PlanetScreen
  },
  {
    headerMode: "none"
  }
);

export default createBottomTabNavigator(
  {
    Impact: ImpactStack,
    Planet: PlanetStack,
    Activities: ActivitiesStack,
    Heroes: HeroesStack,
    Account: AccountStack
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;

        let iconUrl;

        if (routeName === "Impact" && focused) {
          iconUrl = require("../assets/icons/impact-active.png");
        } else if (routeName === "Impact" && !focused) {
          iconUrl = require("../assets/icons/impact-inactive.png");
        } else if (routeName === "Planet" && focused) {
          iconUrl = require("../assets/icons/planet-active.png");
        } else if (routeName === "Planet" && !focused) {
          iconUrl = require("../assets/icons/planet-inactive.png");
        } else if (routeName === "Activities" && focused) {
          iconUrl = require("../assets/icons/activity-active.png");
        } else if (routeName === "Activities" && !focused) {
          iconUrl = require("../assets/icons/activity-inactive.png");
        } else if (routeName === "Heroes" && focused) {
          iconUrl = require("../assets/icons/heros-active.png");
        } else if (routeName === "Heroes" && !focused) {
          iconUrl = require("../assets/icons/heros-inactive.png");
        } else if (routeName === "Account" && focused) {
          iconUrl = require("../assets/icons/account-active.png");
        } else if (routeName === "Account" && !focused) {
          iconUrl = require("../assets/icons/account-inactive.png");
        }

        return <Image source={iconUrl} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: "#000000",
      inactiveTintColor: "#000000",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "#ffffff"
      }
    }
  }
);
