import { StyleSheet, Dimensions } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  container: {
    height: Dimensions.get("window").height
  },
  valley: {
    width: "100%",
    height: "80%"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    height: "30%",
    resizeMode: "contain",
    alignSelf: 'center'
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: colors.green,
    borderRadius: 13
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: fonts.light,
    fontSize: 18,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  }, 
  flex: {
    alignItems: "center",
    justifyContent: "center",
    height: '80%'
  },
  center: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexGrow: 0.3,
    width: '80%'
  }
});

export default styles;
