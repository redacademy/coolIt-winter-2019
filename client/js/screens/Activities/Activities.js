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
const Activities = ({
  data,
  navigation,
  date,
  categories,
  dateChangeHandler,
  image,
  filteredActivity,
  refetch,
  currentPoint
}) => {
  const filtered = filteredActivity.map(filteredActivity => {
    return filteredActivity.activity.name;
  });
  return (
    <View>
      <DateDisplay date={date} dateChangeHandler={dateChangeHandler} />
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
            <Text>
              Your date is
            </Text>
            <Text>
              Your point is 2000 
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
                              currentPoint
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
                        style={styles.buttonContainer}
                      >
                        <View
                          style={{ ...styles.items, backgroundColor: "green" }}
                        >
                          <Text style={styles.title}>{activity.name}</Text>
                        </View>
                      </TouchableHighlight>
                    );
                  })}
              </ScrollView>
            </View>
          );
        })}
        <TouchableOpacity onPress={() => {}} style={styles.impact}>
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
