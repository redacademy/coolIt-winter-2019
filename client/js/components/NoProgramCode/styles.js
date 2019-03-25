import {StyleSheet, Dimensions} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  description: {
    fontSize: 26,
    fontWeight: "400",
    fontFamily: fonts.bold,
    textAlign: "center"
  },
  message: {
    padding: 10,
    paddingTop: 25,
    color: colors.green,
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: fonts.light,
    textAlign: "center"
  },
  messageBox: {
    paddingTop: "50%",
    marginBottom: 25
  },

  itemSeparator: {
    height: 5,
    backgroundColor: colors.green,
    marginTop: 25,
    width: "70%"
  },
  itemBottomSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%",
    position: "absolute",
    right: 0,
    top: 70,
    marginTop: 25
  },

  mainContent: {
    paddingTop: 25,
    marginTop: 25
  },
  imageBox: {
    flex: 1,
    justifyContent: "space-around",
    marginTop: 25,
    paddingTop: 20
  },

  bottom: {
    marginTop: 25
  },
  valley: {
    resizeMode: "cover",
    marginTop: 25,
  },
  container: {
    height: Dimensions.get("window").height
  }
});

export default styles;
