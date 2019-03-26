import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20
  },
  background: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width
  },
  iconImage: {
    padding: 12
  },
  baby: { paddingLeft: "45%", marginTop: "25%", resizeMode: "contain" },
  flower: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    resizeMode: "contain",
    marginLeft: "20%"
  },
  mountain: { paddingLeft: "60%", marginTop: "5%", resizeMode: "contain" },
  tree: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "flex-end",
    resizeMode: "contain",
    marginTop: "20%"
  }
});

export default styles;
