import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import styles from "./styles";

// import { TouchableOpacity } from "react-native-gesture-handler";

class Impact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    const dateSelections = ["D", "W", "M", "Y"];
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.itemSeparator} />
          <Text style={styles.description}>Impact</Text>
          <View style={styles.itemBottomSeparator} />
        </View>
        <View style={styles.metricsContainer}>
          <View style={styles.metric}>
            <Text>2K</Text>
            <Text> Total Points </Text>
          </View>
          <View style={styles.metric2}>
            <Text>50 GHG</Text>
            <Text>daily average</Text>
            <Text>greenhouse gas saved</Text>
          </View>
          <View style={styles.metric}>
            <Text>55</Text>
            <Text>Quiz Score</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Text style={{ paddingVertical: 25 }}>Track Your Progress</Text>
          <View style={styles.iconGroup}>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
          </View>
          <View style={styles.iconGroup}>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/activity-inactive.png")}
                style={styles.iconImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.dateButtonContainer}>
          {dateSelections.map((date, index) => {
            const dateSelected =
              this.state.selected === date
                ? styles.dateButtonSelected
                : styles.dateButton;

            const dateSelectedText =
              this.state.selected === date
                ? styles.buttonTextSelected
                : styles.buttonText;
            return (
              <TouchableOpacity
                style={dateSelected}
                key={index}
                onPress={() => {
                  this.setState({
                    selected: date
                  });
                }}
              >
                <Text style={dateSelectedText}>{`${date}`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          {this.state.selected ? (
            <Image
              source={require("../../assets/images/impact/graph-selected.png")}
            />
          ) : (
            <Image
              source={require("../../assets/images/impact/graph-emepty.png")}
            />
          )}
        </View>
        <View style={styles.footerContainer}>
          <ImageBackground
            source={require("../../assets/images/impact/buttomBanner.png")}
            style={{ width: "100%", height: 200 }}
          >
            <View style={styles.footerContent}>
              <Text>Share</Text>
              <Text>Share Your Impact With Friends</Text>
              <View style={styles.footerIcons}>
                <Image
                  source={require("../../assets/images/impact/facebook.png")}
                />
                <Image
                  source={require("../../assets/images/impact/twitter.png")}
                />
                <Image
                  source={require("../../assets/images/impact/email.png")}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

export default Impact;

{
  /* <TouchableOpacity style={styles.dateButton}>
<Text style={styles.buttonText}>Y</Text>
</TouchableOpacity> */
}
