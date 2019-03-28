import {StyleSheet} from "react-native";
import {colors, fonts} from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  bottomBox: {
    height: "43%"
  },
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
    padding: 3
  },
  rankingView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.light,
    padding: 3,
    marginTop: 2
  },
  point: {
    paddingVertical: 3,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: fonts.light,
    right: 10
  },
  pointLabel: {
    fontSize: 15,
    fontFamily: fonts.light,
    right: 20
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
    paddingTop: 25
  },
  contentTop: {
    paddingTop: 25
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
