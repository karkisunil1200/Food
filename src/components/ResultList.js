import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ResultList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => <Text>Name: {item.name}</Text>}
      />
      <Text>Results: {results.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultList;
