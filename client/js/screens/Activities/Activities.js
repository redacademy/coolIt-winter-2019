import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import DateDisplay from "../../components/DateDisplay";
import { colors } from "../../config/styles";
const Activities = ({
  data,
  navigation,
  date,
  categories,
  dateChangeHandler,
  image,
  filteredActivity,
  refetch,
  currentPoint,
  currentGHPoint,
  dayPoint,
  dayGHPoint
}) => {
  const filtered = filteredActivity.map(filteredActivity => {
    return filteredActivity.activity.name;
  });
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer} />
        <View style={styles.top}>
          <ImageBackground
            source={require("../../assets/images/background2-top.png")}
            style={styles.topBackground}
          >
            <View style={styles.headerText}>
              <Text style={styles.headerWelcome}>Welcome back!</Text>
              <Text style={styles.headerAction}>
                Log your sustainable activities here.
              </Text>
            </View>
            <View style={styles.dateText}>
              <DateDisplay date={date} dateChangeHandler={dateChangeHandler} />
              <Text style={styles.pointDisplay}>
                Points earned: {dayPoint}{" "}
              </Text>
            </View>
          </ImageBackground>
        </View>
        {categories.map(category => {
          return (
            <View style={styles.content} key={category.id}>
              <View style={styles.topSection}>
                <Image style={styles.image} source={image[category.name]} />
                <Text style={styles.section}>{category.name}</Text>
              </View>
              <ScrollView style={styles.list} horizontal={true}>
                {data
                  .filter(activities => {
                    return activities.category.name === category.name;
                  })
                  .map(activity => {
                    return !filtered.includes(activity.name) ? (
                      <TouchableHighlight
                        onPress={() => {
                          navigation.navigate("Activity", {
                            data: {
                              ...activity,
                              date,
                              refetch,
                              added: false,
                              currentPoint,
                              currentGHPoint
                            }
                          });
                        }}
                        key={activity.id}
                        activeOpacity={0.5}
                        underlayColor={"#e6e6e6"}
                        style={styles.buttonContainer}
                      >
                        <View style={styles.items}>
                          <Text style={styles.title}>{activity.name}</Text>
                        </View>
                      </TouchableHighlight>
                    ) : (
                      <TouchableHighlight
                        onPress={() => {
                          navigation.navigate("Activity", {
                            data: {
                              ...activity,
                              date,
                              refetch,
                              added: true
                            }
                          });
                        }}
                        key={activity.id}
                        activeOpacity={0.5}
                        underlayColor={"#e6e6e6"}
                        style={{
                          ...styles.buttonContainer,
                          backgroundColor: colors.darkGreen
                        }}
                      >
                        <View style={styles.items}>
                          <Text
                            style={{ ...styles.title, color: colors.white }}
                          >
                            {activity.name}
                          </Text>
                        </View>
                      </TouchableHighlight>
                    );
                  })}
              </ScrollView>
            </View>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Calculation", {
              data: { dayGHPoint }
            });
          }}
          style={styles.impact}
        >
          <Text style={styles.buttonText}>Calculate My Impact</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Image
            source={require("../../assets/images/valley.png")}
            style={styles.valley}
          />
        </View>
      </ScrollView>
    </View>
  );
};

Activities.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Activities;
