import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    padding: 20,
    marginTop: 20
  },
  imageContainer: {
    padding: 20
  },
  background: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width
  },
  iconImage: {
    padding: 12
  }
});

export default styles;
