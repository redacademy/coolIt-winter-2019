import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  logo: {
    width: 200,
    height: 200,
  },
  great: {
    fontFamily: fonts.light,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14,
    width: 300
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
    fontWeight: 'normal',
    fontSize: 18,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  flex: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-around"
  }
});

export default styles;
