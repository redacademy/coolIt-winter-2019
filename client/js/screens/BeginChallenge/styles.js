import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    flex: 1.25,
    justifyContent: "space-around",
    paddingTop: 120
  },
  flexText: {
    alignItems: "center",
    flex: 0.9,
    justifyContent: "space-between",
    paddingBottom: 60,
    paddingTop: 30
  },
  background: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14,
    width: 300
  },
  logo: {
    width: 180,
    height: 30,
    paddingBottom: 0
  },
  challenge: {
    fontFamily: fonts.light,
    fontWeight: 'bold',
    fontSize: 20
  },
  valley: {
    width: "100%",
    height: "47%"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  button: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 18,
    color: colors.white,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default styles;
