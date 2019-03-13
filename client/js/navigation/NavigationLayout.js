import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import React from "react";
import AccountScreen from "../screens/Account/Account";
import ActivitiesScreen from "../screens/Activities";
import HerosScreen from "../screens/Heroes/Heroes";
import ImpactScreen from "../screens/Impact/Impact";
import PlanetScreen from "../screens/Planet/Planet";
import {Image, View} from "react-native";
import {sharedNavigationOptions} from "./config";

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ActivitiesStack = createStackNavigator(
  {
    Activities: ActivitiesScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const HerosStack = createStackNavigator(
  {
    Heros: HerosScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ImpactStack = createStackNavigator(
  {
    Impact: ImpactScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const PlanetStack = createStackNavigator(
  {
    Planet: PlanetScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Impact: ImpactStack,
    Planet: PlanetStack,
    Activities: ActivitiesStack,
    Heros: HerosStack,
    Account: AccountStack
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
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