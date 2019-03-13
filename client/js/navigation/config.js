import React from "react";
import { View } from "react-native";
import { Header } from "react-navigation";
import { withNavigation } from "react-navigation";

const StyledHeader = props => (
  <View style={{ backgroundColor: "green", overflow: "hidden" }}>
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => {
    console.log(props);
    return <StyledHeader {...props} />;
  },
  headerStyle: {
    backgroundColor: "transparent"
  }
});

export default withNavigation(StyledHeader);
