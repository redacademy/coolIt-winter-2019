import React from "react";
import {
  Text,
  ScrollView,
  View,
  FlatList,
  ImageBackground,
  Image
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Heroes = ({data}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <View style={styles.container}>
        <View style={styles.mainContent}>

        <View style={styles.itemSeparator} />


          <Text style={styles.description}>Heroes</Text>
          <View style={styles.itemBottomSeparator} />


          <FlatList
            style={styles.list}
            data={data}
            renderItem={({item, index}) => (
              <View style={styles.items} key={index}>
                <View style={styles.hero}>
                  <Text style={styles.rank}>{index + 1}.</Text>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.score}>
                  <Text style={styles.point}>{item.point}</Text>
                  <Text style={styles.pointLabel}>GHC savings</Text>

                </View>
              </View>
            )}
            keyExtractor={(item, index) => item + index}
          />
          </View>
          <View style={styles.bottom}>
            <Image
              source={require("../../assets/images/valley.png")}
              style={styles.valley}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

Heroes.propTypes = {
  data: PropTypes.array.isRequired
};

export default Heroes;
