import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  description: {
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center"
    // paddingBottom: 25
  },
  list: {
    paddingTop: 25,

  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
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
    padding: 5
  },
  name: {
    fontSize: 20,
    padding: 5
  },
  point: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 16
  },
  pointLabel: {
    fontSize: 14
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
    paddingBottom: 140
  }
});

export default styles;
