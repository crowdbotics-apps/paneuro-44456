import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const dummyData = [{
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleSearch = () => {
    setResults(dummyData);
  };

  const handleRemove = id => {
    setResults(results.filter(user => user.id !== id));
  };

  const handleGivePermission = id => {
    console.log(`Permission given to user with id: ${id}`);
  };

  return <SafeAreaView style={_styles.KoehcFuq}>
      <View>
        <TextInput style={_styles.SMNffxok} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <Button title="Search" onPress={handleSearch} />
        <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.xkZfmBrc}>
              <Image source={{
          uri: item.image
        }} style={_styles.ajeOoasJ} />
              <View style={_styles.lNEPyWAK}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
              <Button title="Remove" onPress={() => handleRemove(item.id)} />
            </View>} />
      </View>
      <View>
        <TextInput style={_styles.IQSDCsPA} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <Button title="Search" onPress={handleSearch} />
        <FlatList data={results} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.XrVuJilV}>
              <Image source={{
          uri: item.image
        }} style={_styles.UMiGASJA} />
              <View style={_styles.wsTsHNZO}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
              <Button title="Give Permission" onPress={() => handleGivePermission(item.id)} />
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  KoehcFuq: {
    flex: 1,
    padding: 20
  },
  SMNffxok: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  xkZfmBrc: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  ajeOoasJ: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  lNEPyWAK: {
    marginLeft: 10
  },
  IQSDCsPA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  XrVuJilV: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  UMiGASJA: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  wsTsHNZO: {
    marginLeft: 10
  }
});