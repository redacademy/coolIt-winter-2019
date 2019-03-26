import { StyleSheet } from "react-native";
import { fonts } from "../../config/styles";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: fonts.light,
    textAlign: "center",
    fontSize: 20
  },
  indicator: {
      paddingBottom: 30
  }
});

export default styles;
