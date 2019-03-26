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

class Impact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    const user = this.props.data;
    console.log(user);
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
            <Text style={styles.metricTitle}>{user.point}</Text>
            <Text style={styles.metricSubtitle}> Total Points </Text>
          </View>
          <View style={styles.metric2}>
            <Text style={styles.metricTitle}>
              {(user.ghPoint / this.props.days).toFixed(3)}
            </Text>
            <Text style={styles.metricSubtitle}>daily average</Text>
            <Text style={styles.metricSubtitle2}>greenhouse gas saved</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricTitle}>{user.quizScore}</Text>
            <Text style={styles.metricSubtitle}>Quiz Score</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Text
            style={{ paddingVertical: 25, paddingLeft: 15, color: "#808080" }}
          >
            Track Your Progress
          </Text>
          <View style={styles.iconGroup}>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/travel.png")}
                style={styles.iconImage}
              />
              <Text>Travel</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/vehicle.png")}
                style={styles.iconImage}
              />
              <Text>Vehicle</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/food.png")}
                style={styles.iconImage}
              />
              <Text>Food</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/homeHeating.png")}
                style={styles.iconImage}
              />
              <Text>Home Heating</Text>
            </View>
          </View>
          <View style={styles.iconGroup}>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/recycle.png")}
                style={styles.iconImage}
              />
              <Text>recycle</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/water.png")}
                style={styles.iconImage}
              />
              <Text>Water</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/lighting.png")}
                style={styles.iconImage}
              />
              <Text>Lighitng</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require("../../assets/images/impact/toxic.png")}
                style={styles.iconImage}
              />
              <Text>Toxic</Text>
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
        <View style={styles.graphContainer}>
          {this.state.selected ? (
            <Image
              source={require("../../assets/images/impact/graph-selected.png")}
              style={styles.graph}
            />
          ) : (
            <Image
              source={require("../../assets/images/impact/graph-emepty.png")}
              style={styles.graph}
            />
          )}
        </View>
        <View style={styles.footerContainer}>
          <ImageBackground
            source={require("../../assets/images/impact/buttomBanner.png")}
            style={{ width: "100%", height: 170 }}
          >
            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>Share</Text>
              <Text style={styles.footerText}>
                Share Your Impact With Friends
              </Text>
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
