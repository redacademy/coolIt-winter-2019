import React from "react";
import {Text, ScrollView, View, FlatList, Image} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import {colors} from "../../config/styles";

const alternateColors = [colors.white, "#96a687"];

const Heroes = ({data}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.contentTop}>
            <View style={styles.itemSeparator} />
            <Text style={styles.description}>Heroes</Text>
            <View style={styles.itemBottomSeparator} />
          </View>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({item, index}) => (
              <View
                style={{
                  backgroundColor:
                    alternateColors[index % alternateColors.length],
                  ...styles.rankingView
                }}
                key={index}
              >
                <View style={styles.hero}>
                  <Text style={styles.rank}>{index + 1}.</Text>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.score}>
                  <Text style={styles.point}>{item.point}</Text>
                  <Text style={styles.pointLabel}>Points</Text>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => item + index}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomBox} />
          <Image
            source={require("../../assets/images/valley.png")}
            style={styles.valley}
          />
        </View>
      </View>
    </ScrollView>
  );
};

Heroes.propTypes = {
  data: PropTypes.array.isRequired
};

export default Heroes;
