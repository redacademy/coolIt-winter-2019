import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    width: "100%"
  },
  messageBox: {
    flexDirection: "row"
  },
  checkmark: {
    position: "absolute",
    right: 40,
    top: 3
  },
  bottom: {
    width: "100%",
    height: "95%"
  },
  backgroundBottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  top: {
    width: "100%",
    height: "95%"
  },
  backgroundTop: {
    flex: 1,
    justifyContent: "flex-start"
  },
  flexContent: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 22,
    fontFamily: fonts.light,
    fontWeight: "normal",
    alignSelf: "center",
    paddingBottom: 15
  },
  form: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    borderColor: colors.blue,
    minWidth: "85%",
    maxWidth: "85%",
    padding: 5,
    paddingLeft: 15,
    marginLeft: 20,
    fontSize: 18,
    position: "relative"
  },
  button: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
    marginTop: 15
  },
  disabled: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.disabled,
    borderRadius: 13,
    marginTop: 15
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 18,
    color: colors.white,
    paddingTop: 8,
    paddingBottom: 8
  },
  back: {
    marginTop: 80,
    marginLeft: 30,
    height: 40,
    width: 40
  },
  error: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 12,
    fontWeight: "normal",
    paddingLeft: 20
  },
  errorMessage: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 12,
    fontWeight: "normal"
  }
});

export default styles;
