import React from "react";
import { View } from "react-native";
import { Header } from "react-navigation";

const StyledHeader = props => (
  <View style={{ backgroundColor: "green", overflow: "hidden" }}>
    {/* <Header {...props} /> */}
  </View>
);

export const sharedNavigationOptions = navigation => ({
  // headerMode: "none"
  // headerBackTitle: null,
  // header: props => <StyledHeader {...props} />,
  // headerStyle: {
  //   backgroundColor: "transparent"
  // }
});

export default StyledHeader;
