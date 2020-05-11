import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');
  //   console.log(id);
  //   console.log(result); //

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>Name: {result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photos => photos}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

export default ResultsShowScreen;
