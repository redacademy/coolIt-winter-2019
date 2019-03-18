import React from "react";
import {Text, ScrollView, View, FlatList} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Heroes = ({data}) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.mainContent}>
        <Text style={styles.description}>Heroes</Text>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item, index}) => (
            <View style={styles.items} key={index}>
              <View style={styles.hero}>
                <Text style={styles.rank}>{index + 1}</Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View style={styles.score}>
                <Text style={styles.point}>{item.point}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </ScrollView>
  );
};

Heroes.propTypes = {
  data: PropTypes.array.isRequired
};

export default Heroes;
