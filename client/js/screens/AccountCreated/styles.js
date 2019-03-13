import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    width: "100%"
  },
  bottom: {
    width: "100%",
    height: "75%"
  },
  backgroundBottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  top: {
    width: "100%",
    height: "75%"
  },
  backgroundTop: {
    flex: 1,
    justifyContent: "flex-start"
  },
  check: {
    width: 100,
    height: 100
  },
  flexContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  welcome: {
    fontSize: 24,
    fontFamily: fonts.light, 
    fontWeight: 'normal',
  },
  created: {
    fontFamily: fonts.light,
    fontSize: 20
  }
});

export default styles;
