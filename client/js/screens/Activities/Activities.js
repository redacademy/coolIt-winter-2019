import React from "react";
import {Text, View, SectionList} from "react-native";
import styles from "./styles";

const Activities = ({data}) => {
  console.log(data);

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({item, index}) => (
          console.log(item),
          (
            <View style={styles.items} key={index}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          )
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
      />
    </View>
  );
};

export default Activities;

