import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height
  },
  center: {
    flexGrow: 0.5,
    alignItems: "center",
    justifyContent: "space-around"
  },
  flex: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  flexText: {
    alignItems: "center",
    flexGrow: 0.2,
    justifyContent: "space-around",
    width: "90%"
  },
  background: {
    height: "100%",
    resizeMode: "cover"
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 14
  },
  logo: {
    resizeMode: "contain"
  },
  challenge: {
    fontFamily: fonts.light,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 15
  },
  valley: {
    height: "60%",
    resizeMode: "cover"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
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
    fontWeight: "normal",
    fontSize: 18,
    color: colors.white,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default styles;
