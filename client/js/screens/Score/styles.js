import { StyleSheet } from "react-native";
import { colors, fonts, spacing } from "../../config/styles";

const styles = StyleSheet.create({
  screen: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  background: {
    width: "100%",
    height: "100%"
  },
  logo: {
    paddingBottom: 25
  },
  container: {
    position: "relative",
    textAlign: "center"
  },
  absoluteText: {
    position: "absolute",
    top: "33%",
    left: "27%",
    fontFamily: fonts.light,
    fontSize: 20
  },
  absoluteNumber: {
    position: "absolute",
    top: "42%",
    left: "35%",
    fontFamily: fonts.light,
    fontWeight: 'bold', 
    fontSize: 42
  },
  great: {
    fontFamily: fonts.light,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    paddingTop: 20
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 25
  },
  button: {
    width: '100%',
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
    paddingBottom: 8,
    paddingRight: spacing.single*6,
    paddingLeft: spacing.single*6
  },
  flex: {
    alignItems: "center",
    flex: 0.8,
    justifyContent: "space-around",
    width: '80%'
  }
});

export default styles;
