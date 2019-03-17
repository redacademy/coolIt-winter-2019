import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  description: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.bold
  },
  list: {
    paddingTop: 25
  },

  hero: {
    flexDirection: "row",
    paddingLeft: 10
  },
  score: {
    paddingRight: 10
  },
  rank: {
    fontSize: 20,
    fontFamily: fonts.light,

    padding: 5
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.light,
    padding: 5
  },
  point: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: fonts.light,
    left: 20
  },
  pointLabel: {
    fontSize: 15,
    fontFamily: fonts.light,
    right: 20
  },
  background: {
    flex: 1,
    width: "100%"
  },
  valley: {
    width: "100%",
    paddingTop: 25
  },
  itemSeparator: {
    height: 5,
    backgroundColor: colors.green,
    paddingTop: 5,
    width: "70%%"
  },
  itemBottomSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%%",
    position: "absolute",
    right: 0,
    top: 70
  },

  mainContent: {
    alignItems: "stretch",
    paddingTop: 25,
    paddingBottom: 120
  }
});

export default styles;
