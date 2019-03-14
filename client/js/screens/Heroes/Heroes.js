import React from "react";
import {Text, ScrollView, View, FlatList} from "react-native";
import styles from "./styles";

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
              <Text style={styles.title}>{index + 1}</Text>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.title}>{item.point}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </ScrollView>
  );
};

export default Heroes;
