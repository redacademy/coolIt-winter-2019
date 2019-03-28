import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 20
  },
  description: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.bold,
    paddingBottom: 10
  },
  mainContent: {
    paddingTop: 25
  },
  menu: {
    paddingVertical: 20
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
    top: 100
  },
  buttonSeparator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    margin: 2
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: fonts.light,
    padding: 12
  }
});

export default styles;
