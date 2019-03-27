import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "column",
    alignItems: "center",
    height: Dimensions.get("window").height,
    justifyContent: "center"
  },
  buttonAligner: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  header: {
    fontFamily: fonts.light,
    fontWeight: "400",
    paddingHorizontal: 20,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 16
  },

  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    paddingVertical: 10
  },
  disconnect: {
    width: "40%",
    backgroundColor: colors.white,
    borderRadius: 13,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  form: {
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 25,
    borderColor: colors.blue,
    minWidth: "90%",
    maxWidth: "90%",
    marginLeft: 15,
    paddingLeft: 15,
    padding: 5,
    fontSize: 18
  },
  error: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingLeft: 15,
    marginBottom: 15,
  },
  errorMessage: {
    color: colors.red,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingLeft: 20

  }
});

export default styles;
