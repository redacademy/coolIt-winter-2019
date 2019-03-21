import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

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
    marginBottom: 25,
    marginTop: 25,
    padding: 5
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
    textTransform: "uppercase",
    fontFamily: fonts.light,
    fontWeight: "500",
    fontSize: 14,
    paddingLeft: 10
  },
  title: {
    padding: 18,
    fontFamily: fonts.light,
    fontSize: 14
  },
  list: {
    backgroundColor: colors.lightGreen,
    opacity: 0.7,
    padding: 10
  },
  buttonContainer: {
    backgroundColor: colors.white,
    borderRadius: 13,
    borderColor: colors.green,
    borderWidth: 2,
    marginHorizontal: 5
  },
  topSection: {
    flexDirection: "row",
    padding: 25
  }
});

export default styles;
