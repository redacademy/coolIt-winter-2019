import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20
  },
  background: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width,
    position: "relative"
  },
  iconImage: {
    padding: 12
  },
  baby: { position: "absolute", left: 50, top: 140 },
  flower: {
    position: "absolute",
    left: 320,
    top: 140
  },
  mountain: { position: "absolute", left: 120, top: 260 },
  tree: {
    position: "absolute",
    left: 280,
    top: 250
  }
});

export default styles;
