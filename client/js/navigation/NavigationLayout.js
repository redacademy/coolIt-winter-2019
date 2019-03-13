import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import AccountScreen from "../screens/Account";
import ActivityScreen from "../screens/Activities";
import HerosScreen from "../screens/Heroes";
import ImpactScreen from "../screens/Impact";
import PlanetScreen from "../screens/Planet";
import { Image } from "react-native";
import { sharedNavigationOptions } from "./config";

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const HerosStack = createStackNavigator(
  {
    Heros: HerosScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ImpactStack = createStackNavigator(
  {
    Impact: ImpactScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const PlanetStack = createStackNavigator(
  {
    Planet: PlanetScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Impact: ImpactStack,
    Planet: PlanetStack,
    Activity: ActivityStack,
    Heros: HerosStack,
    Account: AccountStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;

        let iconUrl;

        if (routeName === "Impact" && focused) {
          iconUrl = require("../assets/icons/impact-active.png");
        } else if (routeName === "Impact" && !focused) {
          iconUrl = require("../assets/icons/impact-inactive.png");
        } else if (routeName === "Planet" && focused) {
          iconUrl = require("../assets/icons/planet-active.png");
        } else if (routeName === "Planet" && !focused) {
          iconUrl = require("../assets/icons/planet-inactive.png");
        } else if (routeName === "Activity" && focused) {
          iconUrl = require("../assets/icons/activity-active.png");
        } else if (routeName === "Activity" && !focused) {
          iconUrl = require("../assets/icons/activity-inactive.png");
        } else if (routeName === "Heros" && focused) {
          iconUrl = require("../assets/icons/heros-active.png");
        } else if (routeName === "Heros" && !focused) {
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
