import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />

      {errorMessage ? <Text> {errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          navigation={navigation}
          title='Cost Effective'
        />
        <ResultList
          results={filterResultsByPrice('$$')}
          navigation={navigation}
          title='Bit Pricer'
        />
        <ResultList
          results={filterResultsByPrice('$$$')}
          navigation={navigation}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    marginBottom: 5
  }
});

export default SearchScreen;
