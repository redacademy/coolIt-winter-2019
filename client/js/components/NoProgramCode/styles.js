import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 80,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  top: {
    paddingTop: 25,
    marginTop: 25
  },

  description: {
    fontSize: 26,
    fontWeight: "400",
    fontFamily: fonts.bold,
    textAlign: "center"
  },
  contentBox: {
    height: "40%"
  },
  message: {
    color: colors.green,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: fonts.light,
    textAlign: "center"
  },

  itemSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%",
    marginTop: 25
  },
  itemBottomSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%",
    position: "absolute",
    right: 0,
    top: 70,
    marginTop: 25
  }
});

export default styles;
