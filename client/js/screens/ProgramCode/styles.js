import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    width: "100%"
  },
  innerContainer: {
    height: "45%",
    width: "100%"
  },
  bottom: {
    width: "100%",
    height: "100%"
  },
  backgroundBottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  top: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  backgroundTop: {
    flex: 1,
    justifyContent: "flex-start"
  },
  flexContent: {
    flex: 1,
    paddingLeft: 30,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.light,
    alignSelf: "flex-start",
    paddingLeft: 40
  },
  textLast: {
    fontSize: 18,
    fontFamily: fonts.light,
    alignSelf: "flex-start",
    paddingLeft: 40,
    paddingBottom: 20
  },
  form: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    borderColor: colors.blue,
    minWidth: "89%",
    maxWidth: "89%",
    padding: 5,
    paddingLeft: 15,
    fontSize: 16,
    margin: 10
  },
  formShort: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    borderColor: colors.blue,
    minWidth: "39%",
    padding: 5,
    paddingLeft: 15,
    fontSize: 16,
    margin: 10
  },
  button: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
  },
  disabled: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.disabled,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  skipText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.black,
    paddingTop: 8,
    paddingBottom: 8
  },
  error: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 12,
    fontWeight: "normal",
    paddingLeft: 15
  },
  errorMessage: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 12,
    fontWeight: "normal"
  }
});
export default styles;
