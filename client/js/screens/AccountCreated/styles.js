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
    height: "80%"
  },
  backgroundBottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  top: {
    width: "100%",
    height: "80%"
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
    flex: 1.25,
    alignItems: "center",
    justifyContent: "space-around"
  },
  welcome: {
    fontSize: 24,
    fontFamily: fonts.light,
    fontWeight: "normal"
  },
  created: {
    fontFamily: fonts.light,
    fontSize: 20,
    paddingBottom: 15
  },
  button: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 18,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  }
});
export default styles;
