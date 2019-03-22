import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
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
    height: "90%",
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
    paddingLeft: 35
  },
  form: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    borderColor: colors.blue,
    minWidth: "70%",
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
    marginTop: 15
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
    color: colors.green,
    fontFamily: fonts.light,
    fontSize: 14,
    paddingLeft: 12
  },
  errorMessage: {
    color: colors.green,
    fontFamily: fonts.light,
    fontSize: 16
  },
  buttonContainer: {
    width: '45%',
    backgroundColor: colors.green,
    borderRadius: 15,
    marginBottom: 25,
    marginTop: 25,
    marginHorizontal: 5,
    padding: 5
  },
  buttonAligner: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
export default styles;
