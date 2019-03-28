import {StyleSheet, Dimensions} from "react-native";
import {fonts} from "../../config/styles";

const styles = StyleSheet.create({
  date: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("window").width
  },
  dateDisplay: {
    fontSize: 18,
    fontFamily: fonts.light,
    fontWeight: "200"
  }
});

export default styles;
