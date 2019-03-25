import React from "react";
import {ScrollView, View, Image, FlatList, ImageBackground} from "react-native";
import styles from "./styles";

const Planet = ({data, icons}) => {
  
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.mainContent}>
        <ImageBackground
          source={require("../../assets/images/earth.png")}
          style={styles.background}
        >
          <FlatList
            style={styles.list}
            data={data}
            numColumns={4}
            renderItem={({item}) => {
              return (
                <View style={styles.items}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item} />
                  </View>
                </View>
              );
            }}
            keyExtractor={index => "" + index}
          />
        </ImageBackground>
        <FlatList
          style={styles.list}
          data={icons}
          numColumns={5}
          renderItem={({item}) => {
            return (
              <View style={styles.items}>
                <View style={styles.iconImage}>
                  <Image style={styles.image} source={item} />
                </View>
              </View>
            );
          }}
          keyExtractor={index => "" + index}
        />
      </View>
    </ScrollView>
  );
};

export default Planet;
