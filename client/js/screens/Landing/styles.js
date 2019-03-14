import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    flex: 1.4,
    justifyContent: "space-around", 
    paddingTop: 120
  },
  flexText: {
    alignItems: "center",
    flex: 0.7,
    justifyContent: "space-between"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 16,
    width: 300
  },
  join: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 18
  },
  checkbox: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14,
    paddingLeft: 15
  },
  logo: {
    width: 212,
    height: 35
  },
  valley: {
    width: "100%",
    height: "46%"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  joinUs: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.blue,
    borderRadius: 13
  },
  logIn: {
    width: "40%",
    alignSelf: "center",
    backgroundColor: colors.green,
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
  flex: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default styles;
