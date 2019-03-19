import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SectionList,
  ScrollView,
  Image,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Activities = ({ data, navigation }) => {
  return (
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
        </ImageBackground>
      </View>
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <Text style={styles.section}>{section.title}</Text>
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
  );
};

Activities.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Activities;
