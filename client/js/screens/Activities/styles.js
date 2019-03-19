import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topBackground: {
    width: "100%"
  },
  impact: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
    marginBottom: 25
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  headerText: {
    paddingTop: 25,
    paddingLeft: 25
  },
  headerWelcome: {
    paddingTop: 25,
    fontFamily: fonts.bold,
    fontSize: 18
  },
  headerAction: {
    paddingTop: 25,
    fontFamily: fonts.light
  },
  section: {
    padding: 18,
    textTransform: "uppercase",
    fontFamily: fonts.light,
    fontWeight: "500",
    fontSize: 14
  },
  title: {
    padding: 18,
    fontFamily: fonts.light,
    fontSize: 14
  }
});

export default styles;
