import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  valley: {
    width: "100%",
    height: "47%"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    width: 110,
    height: 110,
    marginTop: 150
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 16,
    width: 300
  },
  button: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  }, 
  flex: {
    alignItems: "center",
    flex: 1.9,
    justifyContent: "space-around"
  }
});

export default styles;
