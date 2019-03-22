import {StyleSheet} from "react-native";
import {fonts, colors} from "../../config/styles";

const styles = StyleSheet.create({
  date: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  leftIcon: {
      paddingRight: 25
  },
  rightIcon: {
      paddingLeft: 25
  },
  dateDisplay: {
      fontSize: 18,
      fontFamily: fonts.light,
      fontWeight: '200'
  }

});

export default styles;
