import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  description: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    paddingTop: 25
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  hero: {
    flexDirection: "row",
    paddingLeft: 10
  },
  score: {
    paddingRight: 10
  },
  rank: {
    fontSize: 22,
    padding: 5
  },
  name: {
    fontSize: 22,
    padding: 5
  },
  point: {
      padding: 5,
      fontWeight: "400",
      fontSize: 22
  }
});

export default styles;
