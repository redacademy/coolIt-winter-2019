import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  icon: {
    marginLeft: 20,
    marginTop: 20
  },
  name: {
    textTransform: "uppercase",
    fontFamily: fonts.bold,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600"
  },
  description: {
    fontFamily: fonts.light,
    fontWeight: "400",
    padding: 15,
    textAlign: "center"
  },
  addIcon: {
    textAlign: "center"
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: "Arial",
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  },
  dismiss: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
    marginBottom: 25
  }
});

export default styles;
