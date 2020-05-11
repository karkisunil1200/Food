import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name='search' />

      <TextInput
        style={styles.inputStyle}
        onChangeText={onTermChange}
        autoCapitalize='none'
        value={term}
        autoCorrect={false}
        placeholder='Search'
        onEndEditing={onTermSubmit} //Means we are done typing
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#E4E9EA',
    height: 60,
    borderRadius: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
