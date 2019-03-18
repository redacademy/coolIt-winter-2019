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
    justifyContent: "space-around",
    paddingLeft: 30,
    paddingRight: 30
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.light,
    alignSelf: 'flex-start'
  },
  button: {
    width: "50%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 16,
    color: colors.white,
    paddingTop: 8,
    paddingBottom: 8
  },
  skipText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.black,
    paddingTop: 8,
    paddingBottom: 8
  }
});
export default styles;
