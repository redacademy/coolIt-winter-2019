import React from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import DateDisplay from "../../components/DateDisplay";
const Activities = ({ data, navigation, date, dateHandler }) => {
  return (
    <View style={styles.container}>
      <DateDisplay date={date} dateHandler={dateHandler} />
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("Activity", {
                activity: item
              });
            }}
            activeOpacity={0.5}
            underlayColor={"#e6e6e6"}
          >
            <View style={styles.items} key={index}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
      />
    </View>
  );
};

Activities.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Activities;
