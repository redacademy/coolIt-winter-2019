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
          <View style={styles.itemSeparator} />

          <Text style={styles.description}>Heroes</Text>
          <View style={styles.itemBottomSeparator} />

          <FlatList
            style={styles.list}
            data={data}
            renderItem={({item, index}) => (
              <View
                style={styles.items}
                style={{
                  backgroundColor:
                    alternateColors[index % alternateColors.length],
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 5
                }}
                key={index}
              >
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
    </ScrollView>
  );
};

Heroes.propTypes = {
  data: PropTypes.array.isRequired
};

export default Heroes;
