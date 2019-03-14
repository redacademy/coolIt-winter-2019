import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  logo: {
    width: 240,
    height: 240,
    paddingBottom: 25
  },
  container: {
    position: "relative",
    textAlign: "center"
  },
  absoluteText: {
    position: "absolute",
    top: "33%",
    left: "20%",
    fontFamily: fonts.light,
    fontSize: 20
  },
  absoluteNumber: {
    position: "absolute",
    top: "42%",
    left: "26%",
    fontFamily: fonts.light,
    fontWeight: 'bold', 
    fontSize: 42
  },
  great: {
    fontFamily: fonts.light,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    padding: 20,
    paddingTop: 25
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14,
    width: 300,
    paddingBottom: 40
  },
  button: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontWeight: "normal",
    fontSize: 18,
    color: colors.white,
    paddingTop: 8,
    paddingBottom: 8
  },
  flex: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

export default styles;
