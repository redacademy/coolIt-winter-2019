import {StyleSheet, Dimensions} from "react-native";
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
    padding: 3
  },
  point: {
    padding: 3,
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

  itemSeparator: {
    height: 5,
    backgroundColor: colors.green,
    paddingTop: 5,
    width: "70%"
  },
  itemBottomSeparator: {
    height: 5,
    backgroundColor: colors.green,
    width: "70%",
    position: "absolute",
    right: 0,
    top: 60
  },

  mainContent: {
    paddingTop: 15
  },

  bottom: {
    flex: 1,
    justifyContent: "space-around"
  },
  valley: {
    resizeMode: "cover"
  },
  container: {
    height: Dimensions.get("window").height
  }
});

export default styles;
