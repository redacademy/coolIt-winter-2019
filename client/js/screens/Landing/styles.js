import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {},
  center: {
    alignItems: "center",
    paddingRight: 30,
    paddingLeft: 30
  },
  background: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: fonts.light,
    textAlign: 'center', 
    fontSize: 16,
    paddingBottom: 30
  },
  join: {
    fontFamily: fonts.light,
    textAlign: 'center', 
    fontSize: 18,
    paddingBottom: 30
  },
  checkbox: {
    fontFamily: fonts.light,
    textAlign: 'center', 
    fontSize: 14, 
    paddingLeft: 15
  },
  logo: {
    width: "63%",
    height: "5.6%",
    marginTop: 120,
    marginBottom: 25
  },
  valley: {
    width: "100%",
    height: "62%"
  },
  bottom: {
   flex: 1, 
   justifyContent: 'flex-end'
  },
  joinUs: {
    margin: 20,
    marginBottom: 30,
    marginTop: 40,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: colors.blue,
    borderRadius: 13
  },
  logIn: {
    margin: 20,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: colors.green, 
    borderRadius: 13
  }, 
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 10
  }, 
  flex: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default styles;
