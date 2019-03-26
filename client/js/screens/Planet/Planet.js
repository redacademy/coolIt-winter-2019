import React from "react";
import {
  ScrollView,
  View,
  Image,
  FlatList,
  ImageBackground
} from "react-native";
import styles from "./styles";

const Planet = ({ icons }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.mainContent}>
        <ImageBackground
          source={require("../../assets/images/earth.png")}
          style={styles.background}
        >
          <Image
            source={require("../../assets/icons/baby-tree.png")}
            style={styles.baby}
          />
          <Image
            source={require("../../assets/icons/flower.png")}
            style={styles.flower}
          />
          <Image
            source={require("../../assets/icons/mountain.png")}
            style={styles.mountain}
          />
          <Image
            source={require("../../assets/icons/tree.png")}
            style={styles.tree}
          />
        </ImageBackground>
        <FlatList
          style={styles.list}
          data={icons}
          numColumns={5}
          renderItem={({ item }) => {
            return (
              <View style={styles.iconImage}>
                <Image style={styles.image} source={item} />
              </View>
            );
          }}
          keyExtractor={(item, index) => "" + index}
        />
      </View>
    </ScrollView>
  );
};

export default Planet;
