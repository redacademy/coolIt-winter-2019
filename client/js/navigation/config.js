import React from "react";
import { View } from "react-native";
import { Header } from "react-navigation";

const StyledHeader = props => (
  <View style={{ backgroundColor: "green", overflow: "hidden" }} />
);

export const sharedNavigationOptions = navigation => ({});

export default StyledHeader;
